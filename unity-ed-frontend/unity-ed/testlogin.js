import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config(); // loads .env
const prisma = new PrismaClient();

async function testLogin(email, password) {
  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      console.log("❌ No user found with that email");
      return;
    }

    console.log("✅ User found:", user.email, "| Role:", user.role);

    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      console.log("✅ Password is correct!");
    } else {
      console.log("❌ Password is incorrect!");
    }
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await prisma.$disconnect();
  }
}

testLogin("admin1@unityed.com", "admin123"); // put your test credentials here
