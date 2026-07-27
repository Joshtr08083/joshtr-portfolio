"use server";

import db from "@/lib/db"
import {cache} from 'react';

export async function getAllProjects() {
    const rows = db
        .prepare("SELECT id, title, img_url, img_x, img_y, description FROM projects")
        .all();
    return rows
}

interface ProjectData {
  title: string;
  description: string;
  page_data: string;
}


// const fetchProjectData = cache(async (projectId : string) => {
//     const row = db
//         .prepare("SELECT title, description, page_data FROM projects WHERE id = ?")
//         .get(projectId);
//     return row
// });


const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProjectData = cache(async (projectId: string, maxAttempts = 4): Promise<ProjectData> => {
    let lastError: unknown;

    for (let attempt = 1; attempt <= maxAttempts; attempt += 1) {
    try {
    //   const res = await fetchProjectData(projectId) as ProjectData | null;
        const res = db
            .prepare("SELECT title, description, page_data FROM projects WHERE id = ?")
            .get(projectId) as ProjectData | null;

        if (res && Object.keys(res).length > 0) {
            return res;
        }

        throw new Error(`No project data returned for ${projectId}`);
    }
    catch (err) {
        lastError = err;

        if (attempt < maxAttempts) {
            await sleep(150 * attempt);
        }
        }
    }

throw (lastError instanceof Error)? lastError: new Error(`Failed to load project data for ${projectId}`);
});