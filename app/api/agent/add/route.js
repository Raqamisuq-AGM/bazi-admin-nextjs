import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Example usage of Prisma Client in Next.js API route
export async function POST(request) {
  const body = await request.json();

  try {
    // Insert a new agent into the database
    const newAgent = await prisma.agent.create({
      data: {
        type: body.type,
        name: body.name,
        agentID: body.agentID,
        rating: body.rating,
        phoneAppLink: body.phoneAppLink,
        phoneNumber: body.phoneNumber,
        complainLink: body.complainLink,
      },
    });

    return NextResponse.json({ message: "success", data: newAgent });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
