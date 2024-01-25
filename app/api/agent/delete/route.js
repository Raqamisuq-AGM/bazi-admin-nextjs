import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Example usage of Prisma Client in Next.js API route
export async function POST(request) {
  const { id } = await request.json();

  try {
    // Check if the agent with the provided ID exists
    const existingAgent = await prisma.agent.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingAgent) {
      return NextResponse.json({ error: "Agent not found" });
    }

    // Update the agent with the provided ID
    const deleteAgent = await prisma.agent.delete({
      where: {
        id: id,
      },
    });

    return NextResponse.json({ message: "success", data: deleteAgent });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
