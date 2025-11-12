import { defineConfig, env } from "prisma/config";
import dotenv from "dotenv";

dotenv.config(); // 👈 This loads your .env file manually

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  engine: "classic",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
