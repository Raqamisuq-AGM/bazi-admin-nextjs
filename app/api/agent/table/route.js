import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Example usage of Prisma Client in Next.js API route
export async function POST(request) {
  const body = await request.json();

  try {
    // Fetch the count of super agents
    let Agents;
    if (body.type == "all") {
      Agents = await prisma.agent.findMany();
    } else {
      Agents = await prisma.agent.findMany({
        where: {
          type: body.type,
        },
      });
    }

    return NextResponse.json({ message: "success", data: Agents });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
