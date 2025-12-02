import { ipcMain } from "electron";
const { dialog } = require("electron");

const init = () => {
  // select folder
  ipcMain.handle("select-folder", async (event) => {
    const result = await dialog.showOpenDialog({
      properties: ["openDirectory"],
    });
    if (!result.canceled && result.filePaths.length > 0) {
      return result.filePaths[0];
    }
    return;
  });

  // select file
  ipcMain.handle("select-file", async (event, filters: Electron.FileFilter[]) => {
    const result = await dialog.showOpenDialog({
      properties: ["openFile"],
      filters: filters,
    });
    if (!result.canceled && result.filePaths.length > 0) {
      return result.filePaths[0];
    }
    return;
  });
};

export { init };
