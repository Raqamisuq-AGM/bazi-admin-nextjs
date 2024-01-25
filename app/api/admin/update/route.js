import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Example usage of Prisma Client in Next.js API route
export async function POST(request) {
  const { ...updateData } = await request.json();

  try {
    // Check if the agent with the provided ID exists
    const existingAgent = await prisma.admin.findUnique({
      where: {
        id: "65ae7a2bc76533be8e91a455",
      },
    });

    if (!existingAgent) {
      return NextResponse.json({ error: "data not found" });
    }

    // Update the agent with the provided ID
    const updatedAdmin = await prisma.admin.update({
      where: {
        id: "65ae7a2bc76533be8e91a455",
      },
      data: updateData,
    });

    return NextResponse.json({ message: "success", data: updatedAdmin });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
