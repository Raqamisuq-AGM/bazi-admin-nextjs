import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Example usage of Prisma Client in Next.js API route
export async function POST(request) {
  try {
    // Fetch the agent with the specified ID
    const admin = await prisma.admin.findUnique({
      where: {
        id: "65ae7a2bc76533be8e91a455",
      },
    });

    if (!admin) {
      return NextResponse.json({ error: "data not found" });
    }

    return NextResponse.json({ message: "success", data: admin });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
