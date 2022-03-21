import path from "path";
import { BrowserWindow, app, session, ipcMain, shell } from "electron";
import { searchDevtools } from "electron-search-devtools";
import { MainProcessResponse } from "../@types";

const isDev = process.env.NODE_ENV === "development";

if (isDev) {
  const platform = process.platform;
  const execPath =
    platform === "win32"
      ? "../node_modules/electron/dist/electron.exe"
      : "../node_modules/.bin/electron";

  require("electron-reload")(__dirname, {
    electron: path.resolve(__dirname, execPath),
  });
}

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 500,
    minHeight: 500,
    useContentSize: true,
    titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  if (isDev) mainWindow.webContents.openDevTools();

  mainWindow.loadFile("dist/index.html");
};

app.whenReady().then(async () => {
  if (isDev) {
    const devtools = await searchDevtools("REACT");
    if (devtools) {
      await session.defaultSession.loadExtension(devtools, {
        allowFileAccess: true,
      });
    }
  }

  createWindow();
});

const isLock = app.requestSingleInstanceLock();
if (!isLock) {
  app.quit();
  process.exit(0);
}

app.once("window-all-closed", () => app.quit());

// open folder
ipcMain.handle("open-folder", (event, path): MainProcessResponse<undefined> => {
  shell.showItemInFolder(path);

  return {
    status: "ok",
  };
});
