import Dexie, { Table } from "dexie";

export type Project = {
  id?: number;
  name: string;
  updatedAt: Date;
};

export type Audio = {
  id?: number;
  projectId: number;
  name: string;
  path: string;
  createdAt: Date;
};

export class MusicanDB extends Dexie {
  projects!: Table<Project>;
  audios!: Table<Audio>;

  constructor() {
    super("MusicanDB");
    this.version(1).stores({
      projects: "++id, name, updatedAt",
      audios: "++id, projectId, name, path, createdAt",
    });
  }
}

export const db = new MusicanDB();
