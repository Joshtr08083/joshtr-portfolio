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


const raspberrypiData = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "pi5.json"), 'utf-8'));
update.run(JSON.stringify(raspberrypiData["id"]), raspberrypiData["title"], raspberrypiData["img_url"], 
                          raspberrypiData["img_x"], raspberrypiData["img_y"], raspberrypiData["description"],
                          raspberrypiData["rank"], JSON.stringify(raspberrypiData["page_data"]));

const robotArmData = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "robot-arm.json"), 'utf-8'));
update.run(JSON.stringify(robotArmData["id"]), robotArmData["title"], robotArmData["img_url"], 
                          robotArmData["img_x"], robotArmData["img_y"], robotArmData["description"],
                          robotArmData["rank"], JSON.stringify(robotArmData["page_data"]));

const portfolioData = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "portfolio.json"), 'utf-8'));
update.run(JSON.stringify(portfolioData["id"]), portfolioData["title"], portfolioData["img_url"], 
                          portfolioData["img_x"], portfolioData["img_y"], portfolioData["description"],
                          portfolioData["rank"], JSON.stringify(portfolioData["page_data"]));

const plantSensor = JSON.parse(fs.readFileSync(path.join(process.cwd(), "data", "pdigtwinterface.json"), 'utf-8'));
update.run(JSON.stringify(plantSensor["id"]), plantSensor["title"], plantSensor["img_url"], 
                          plantSensor["img_x"], plantSensor["img_y"], plantSensor["description"],
                          plantSensor["rank"], JSON.stringify(plantSensor["page_data"]));

