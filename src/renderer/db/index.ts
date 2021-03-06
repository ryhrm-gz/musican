import Dexie, { IndexableType, Table } from "dexie";

export type Project = {
  id?: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Audio = {
  id?: number;
  projectId: number | IndexableType;
  name: string;
  path: string;
  createdAt: Date;
  updatedAt: Date;
};

export class MusicanDB extends Dexie {
  projects!: Table<Project>;
  audios!: Table<Audio>;

  constructor() {
    super("MusicanDB");
    this.version(1).stores({
      projects: "++id, name, createdAt, updatedAt",
      audios: "++id, projectId, name, path, createdAt, updatedAt",
    });
  }
}

export const db = new MusicanDB();
