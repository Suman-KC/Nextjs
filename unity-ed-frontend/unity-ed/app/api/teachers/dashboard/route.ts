import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const teacherId = 1; // for now static (later from session)
  const totalStudents = await prisma.students.count({ where: { teacherId } });
  const activeClasses = await prisma.class.count({ where: { teacherId } });
  const recentClasses = await prisma.class.findMany({
    where: { teacherId },
    orderBy: { updatedAt: "desc" },
    take: 3,
    select: { className: true, studentCount: true, updatedAt: true },
  });

  return NextResponse.json({
    totalStudents,
    activeClasses,
    avgProgress: 78,
    hoursPlayed: 342,
    recentClasses,
  });
}
