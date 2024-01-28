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
  const { token } = await request.json();

  try {
    // Retrieve the user from the database based on the email
    const user = await prisma.admin.findUnique({
      where: {
        token: token,
      },
    });

    if (!user) {
      return NextResponse.json({ message: "Invalid token" });
    }
    

    return NextResponse.json({ message: "success", data: { user } });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
