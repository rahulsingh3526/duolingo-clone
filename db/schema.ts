import { serial, pgTable, text } from "drizzle-orm/pg-core";

export const table = pgTable("table", {
  int: serial("id").primaryKey(),
  title: text("title").notNull(),
  imageSrc: text("image_src").notNull(),
});
