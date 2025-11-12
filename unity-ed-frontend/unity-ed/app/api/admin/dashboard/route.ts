import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const adminId = 1;
  const totalSchools = await prisma.s.count({ where: { adminId } });
  const totalTeachers = await prisma.teacher.count();
  const totalClasses = await prisma.classes.count();

  const recentSchools = await prisma.school.findMany({
    where: { adminId },
    orderBy: { createdAt: "desc" },
    take: 3,
  });

  return NextResponse.json({
    totalSchools,
    totalTeachers,
    totalClasses,
    recentSchools,
  });
}
