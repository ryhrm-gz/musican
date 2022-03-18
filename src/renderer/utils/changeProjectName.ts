import { db } from "../db";

export const changeProjectName = async (projectId: number, name: string) => {
  try {
    const id = await db.projects.update(projectId, {
      name,
    });
    return id;
  } catch (error) {
    return null;
  }
};
