import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

// GET all classes
export async function GET() {
  const teacherId = 1;
  const classes = await prisma..findMany({ where: { teacherId } });
  return NextResponse.json(classes);
}

// POST create class
export async function POST(req: Request) {
  const { className, section, schoolId } = await req.json();
  const teacherId = 1;
  const newClass = await prisma.class.create({
    data: { className, section, schoolId, teacherId },
  });
  return NextResponse.json(newClass);
}
