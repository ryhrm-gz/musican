import { db } from "../db";

export const createProject = async (name: string) => {
  const now = new Date();
  try {
    const id = await db.projects.add({
      name,
      createdAt: now,
      updatedAt: now,
    });
    return id;
  } catch (error) {
    return null;
  }
};
