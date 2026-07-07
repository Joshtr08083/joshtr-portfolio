"use server";

import db from "@/lib/db"
import {cache} from 'react';

export async function getAllProjects() {
    const rows = db
        .prepare("SELECT id, title, img_url, img_x, img_y, description FROM projects")
        .all();
    return rows
}

export const getProjectData = cache(async (projectId : string) => {
    const row = db
        .prepare("SELECT title, description, page_data FROM projects WHERE id = ?")
        .get(projectId);
    return row
});