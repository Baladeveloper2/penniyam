import { NextResponse } from "next/server";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import prisma from "@/lib/prisma";

export const dynamic = 'force-static';

export async function POST(req: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session || !session.user) {
    return NextResponse.json({ message: "You must be logged in to enroll." }, { status: 401 });
  }

  try {
    const { courseId } = await req.json();

    if (!courseId) {
      return NextResponse.json({ message: "Course ID is required." }, { status: 400 });
    }

    const userId = (session.user as any).id;

    // Check if user is already enrolled
    const existingEnrollment = await prisma.enrollment.findUnique({
      where: {
        userId_courseId: {
          userId,
          courseId,
        }
      }
    });

    if (existingEnrollment) {
      return NextResponse.json({ message: "You are already enrolled in this course." }, { status: 400 });
    }

    // Create the enrollment
    const enrollment = await prisma.enrollment.create({
      data: {
        userId,
        courseId,
      }
    });

    return NextResponse.json({ message: "Successfully enrolled!", enrollment }, { status: 201 });
  } catch (error) {
    console.error("Enrollment Error:", error);
    return NextResponse.json({ message: "An error occurred during enrollment." }, { status: 500 });
  }
}
