import { defineConfig } from "drizzle-kit";
import "dotenv/config";

export default defineConfig({
  dialect: "postgresql",
  schema: "database/database.schema.ts",
  out: "database/migrations/",
  dbCredentials: {
    url: process.env.POSTGRES_DATABASE_URL as string, // PostgreSQL
    // url: process.env.DATABASE_URL as string, // Vercel/Neon Serverless
  },
  verbose: true,
  strict: true,
});

