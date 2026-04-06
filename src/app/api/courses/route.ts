import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session || (session.user as any)?.role !== "ADMIN") {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    const data = await req.json();
    // Validate minimally required fields based on our Course schema
    if (!data.title || !data.description || !data.price || !data.modes) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const course = await prisma.course.create({
      data: {
        title: data.title,
        description: data.description,
        price: data.price,
        modes: data.modes,
        duration: data.duration || "4 Weeks",
        outcome: data.outcome || "Certification",
        category: data.category || "General",
        image: data.image || "/placeholder.png",
      }
    });

    return NextResponse.json(course, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "An error occurred while creating the course." }, { status: 500 });
  }
}
