// src/migrate.ts

import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { migrate } from "drizzle-orm/neon-http/migrator";
import { config } from "dotenv";
import * as schema from "../db/schema";

config({ path: ".env.local" });

const sql = neon(process.env.DATABASE_URL!);
const db = drizzle(sql, { schema });

const main = async () => {
  try {
    // await migrate(db, { migrationsFolder: "drizzle" });
    console.log("migrating database");
    await db.delete(schema.courses);
    await db.delete(schema.userProgress);

    await db.insert(schema.courses).values([
      { title: "Spanish", imageSrc: "./es.svg" },
      { title: "Italian", imageSrc: "./it.svg" },
      { title: "French", imageSrc: "./fr.svg" },
      { title: "Croation", imageSrc: "./hr.svg" },
    ]);
    console.log("Migration completed");
  } catch (error) {
    console.error("Error during migration:", error);
    process.exit(1);
  }
};

main();
