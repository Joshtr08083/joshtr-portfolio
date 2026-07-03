import db from "../lib/db";

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    img_url TEXT,
    img_x INTEGER,
    img_y INTEGER,
    description TEXT,
    page_data JSONB
  )
`);