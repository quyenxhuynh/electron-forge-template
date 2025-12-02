import { ipcMain } from "electron";

const init = () => {
  return ipcMain.handle("ping", async () => "pong");
};

export { init };
