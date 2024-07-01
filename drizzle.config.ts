import "dotenv/config";

import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./db/schema.ts",
  dialect: "postgresql", // "postgresql" | "mysql"
  //   driver: "turso", // optional and used only if `aws-data-api`, `turso`, `d1-http`(WIP) or `expo` are used
  out: "./drizzle",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
