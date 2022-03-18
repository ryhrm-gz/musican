import { db } from "../db";

export const createProjectWithAddFile = async (name: string, path: string) => {
  const now = new Date();
  db.transaction("rw", [db.projects, db.audios], async () => {
    const projectId = await db.projects.add({
      name,
      createdAt: now,
      updatedAt: now,
    });
    await db.audios.add({
      projectId,
      name,
      path,
      createdAt: now,
      updatedAt: now,
    });
  }).catch((error) => {
    alert("プロジェクトの作成に失敗しました");
  });
};
