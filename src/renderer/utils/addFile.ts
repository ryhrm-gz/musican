import { db } from "../db";

export const addFile = async (
  projectId: number,
  name: string,
  path: string
) => {
  try {
    const id = await db.audios.add({
      projectId,
      name,
      path,
      createdAt: new Date(),
    });
    return id;
  } catch (error) {
    console.log(error);
    return null;
  }
};
