import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Example usage of Prisma Client in Next.js API route
export async function POST(request) {
  const body = await request.json();

  try {
    // Fetch the agent with the specified ID
    const agent = await prisma.agent.findUnique({
      where: {
        id: body.id,
      },
    });

    if (!agent) {
      return NextResponse.json({ error: "Agent not found" });
    }

    return NextResponse.json({ message: "success", data: agent });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
