import { db } from "../db";

export const addFile = async (
  projectId: number,
  name: string,
  path: string
) => {
  const now = new Date();
  db.transaction("rw", [db.projects, db.audios], async () => {
    await db.projects.update(projectId, {
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
    alert("ファイルの追加に失敗しました");
  });
};
