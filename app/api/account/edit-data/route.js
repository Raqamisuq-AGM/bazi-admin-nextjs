import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Example usage of Prisma Client in Next.js API route
export async function POST(request) {
  try {
    // Fetch the agent with the specified ID
    const blog = await prisma.creatAccountPage.findUnique({
      where: {
        id: "65ae8a77c76533be8e91a459",
      },
    });

    if (!blog) {
      return NextResponse.json({ error: "data not found" });
    }

    return NextResponse.json({ message: "success", data: blog });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" });
  } finally {
    await prisma.$disconnect();
  }
}
