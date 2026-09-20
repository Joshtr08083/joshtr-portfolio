import db from "../lib/db";
import fs from 'fs';
import path from "path"

db.exec(`
  CREATE TABLE IF NOT EXISTS projects (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    img_url TEXT,
    img_x INTEGER,
    img_y INTEGER,
    description TEXT,
    rank INTEGER,
    page_data JSON
  )
`);


const update = db.prepare(`
  INSERT INTO projects (id, title, img_url, img_x, img_y, description, rank, page_data)
  VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  ON CONFLICT(id) DO UPDATE SET title=excluded.title, img_url=excluded.img_url, img_x=excluded.img_x, img_y=excluded.img_y, description=excluded.description, rank=excluded.rank, page_data=excluded.page_data
`);


const files = ["pi5", "robot-arm", "portfolio", "pdigtwinterface"];

for (const name of files) {
  const d = JSON.parse(
    fs.readFileSync(path.join(process.cwd(), "data", `${name}.json`), "utf-8")
  );
  update.run(d.id, d.title, d.img_url, d.img_x, d.img_y, d.description, d.rank, JSON.stringify(d.page_data));
}