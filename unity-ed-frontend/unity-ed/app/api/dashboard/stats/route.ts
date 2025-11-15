import { PrismaClient,UserRole } from "@prisma/client";
import { authGuard } from "@/lib/authGuard";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const { ok, response, session } = await authGuard(req); 
    
    if (!ok) return response;
    // Total classes from Class table
    const totalClasses = await prisma.class.count();
    console.log("totalClasses", totalClasses);

    // Total students from User table with role STUDENT
    const totalStudents = await prisma.user.count({
      where: { role: UserRole.STUDENT },
    });

    return NextResponse.json(
      {
        totalClasses,
        totalStudents,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("STATS API ERROR:", error);

    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
