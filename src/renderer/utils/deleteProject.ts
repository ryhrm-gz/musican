import { db } from "../db";

export const deleteProject = async (projectId: number) => {
  try {
    await db.projects.delete(projectId);
  } catch (error) {
    alert("プロジェクトの削除に失敗しました");
  }
};
