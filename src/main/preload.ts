import { contextBridge, ipcRenderer } from "electron";

const api = {
  openFolder: async (path: string) =>
    await ipcRenderer.invoke("open-folder", path),
  getVersion: async () => await ipcRenderer.invoke("get-version"),
};

contextBridge.exposeInMainWorld("api", api);
