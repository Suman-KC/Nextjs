import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function PUT(req: Request, { params }: any) {
  const { id } = params;
  const { className, section } = await req.json();
  const updated = await prisma.class.update({
    where: { id: Number(id) },
    data: { className, section },
  });
  return NextResponse.json(updated);
}

export async function DELETE(req: Request, { params }: any) {
  const { id } = params;
  await prisma.class.delete({ where: { id: Number(id) } });
  return NextResponse.json({ message: "Class deleted" });
}
