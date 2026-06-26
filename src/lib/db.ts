import { PrismaClient } from "@/generated/prisma";
import path from "path";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Resolve the SQLite file by absolute path so it works regardless of the
// working directory. On Vercel the database ships inside the serverless bundle
// at <root>/prisma/dev.db (see outputFileTracingIncludes in next.config.mjs).
// A non-file DATABASE_URL (e.g. a future Postgres URL) is used as-is.
const envUrl = process.env.DATABASE_URL;
const databaseUrl =
  envUrl && !envUrl.startsWith("file:")
    ? envUrl
    : `file:${path.join(process.cwd(), "prisma", "dev.db")}`;

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    datasourceUrl: databaseUrl,
    log: process.env.NODE_ENV === "development" ? ["error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
