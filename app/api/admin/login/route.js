import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

// Function to compare passwords using bcrypt
const comparePasswords = async (inputPassword, hashedPassword) => {
  const match = await bcrypt.compare(inputPassword, hashedPassword);

  return match;
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

    // Compare the input password with the hashed password from the database
    const isPasswordValid = await comparePasswords(password, user.password);

    if (isPasswordValid) {
      // Authentication successful
      return NextResponse.json({ message: "Login successful", data: user });
    } else {
      // Incorrect password
      return NextResponse.json({ message: "Invalid credentials" });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
