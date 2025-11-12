import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const classId = 1;
  const student = await prisma.students.findMany({ where: { classId} });
  return NextResponse.json(student);
}
