import { db } from "../db";

export const createProject = async (name: string) => {
  try {
    const id = await db.projects.add({
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return id;
  } catch (error) {
    return null;
  }
};
