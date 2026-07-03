"use server";

import db from "@/lib/db"

export async function getAllProjects() {
    const rows = db
        .prepare("SELECT id, title, img_url, img_x, img_y, description FROM projects")
        .all();
    return rows
}

export async function getProjectData(projectId : string) {
    const row = db
        .prepare("SELECT title, page_data FROM projects WHERE id = ?")
        .get(projectId);
    return row
}