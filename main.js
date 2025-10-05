import { app, BrowserWindow } from "electron";

(async function () {
  try {
    await app.whenReady();
    const mainWindow = new BrowserWindow();
    mainWindow.loadFile("./renderer/index.html");
  } catch (err) {
    console.log(err);
  }
})();
