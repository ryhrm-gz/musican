import { db } from "../db";

export const deleteProject = async (projectId: number) => {
  db.transaction("rw", [db.projects, db.audios], async () => {
    await db.projects.delete(projectId);
    await db.audios.where("projectId").equals(projectId).delete();
  }).catch(() => {
    alert("プロジェクトの削除に失敗しました");
  });
};
