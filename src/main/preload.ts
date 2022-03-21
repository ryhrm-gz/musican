import { contextBridge, ipcRenderer } from "electron";

const api = {
  openFolder: async (path: string) =>
    await ipcRenderer.invoke("open-folder", path),
};

contextBridge.exposeInMainWorld("api", api);
