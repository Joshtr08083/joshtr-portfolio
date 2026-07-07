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
    page_data JSON
  )
`);


const raspberrypiData = fs.readFileSync(path.join(process.cwd(), "data", "pi5.json"), 'utf-8');
JSON.parse(raspberrypiData);

const update = db.prepare(`
  UPDATE projects 
  SET page_data = ? 
  WHERE id = ?
`);
const result = update.run(raspberrypiData, 'pi-controller')