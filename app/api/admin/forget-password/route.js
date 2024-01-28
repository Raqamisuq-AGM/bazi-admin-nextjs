import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// Function to compare passwords using bcrypt
const comparePasswords = async (inputPassword, hashedPassword) => {
  const match = await bcrypt.compare(inputPassword, hashedPassword);
  return match;
};

// Function to generate a random 4-digit token
const generateToken = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

// Example usage of Prisma Client in Next.js API route
export async function POST(request) {
  const { email, password } = await request.json();

  try {
    // Retrieve the user from the database based on the email
    const user = await prisma.admin.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "Invalid credentials" });
    }

    // Initialize existingToken variable
    let existingToken;

    // Generate a unique token
    let token;
    do {
      token = generateToken();
      // Check if the token already exists in the database
      existingToken = await prisma.admin.findFirst({
        where: {
          token: token,
        },
      });
    } while (existingToken);

    // Save the token to the database
    await prisma.admin.update({
      where: {
        email: email,
      },
      data: {
        token: token,
      },
    });

    return NextResponse.json({ message: "success", data: { user, token } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
