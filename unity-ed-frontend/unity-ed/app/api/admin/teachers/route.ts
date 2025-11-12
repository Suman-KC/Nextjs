import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET() {
  const teachers = await prisma.Teacher.findMany({ include: { school: true } });
  return NextResponse.json(teachers);
}

export async function POST(req: Request) {
  const { name, email, password, schoolId } = await req.json();
  const newTeacher = await prisma.teacher.create({
    data: { name, email, password, schoolId },
  });
  return NextResponse.json(newTeacher);
}
