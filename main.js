const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

(async function () {
  try {
    await app.whenReady();
    const mainWindow = new BrowserWindow({
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
      },
      transparent: true,
      frame: false,
      resizable: true,
      width: 150,
      height: 150,
    });
    mainWindow.loadFile("./renderer/index.html");
    ipcMain.on("Status", (_, args) => {
      console.log(args);
    });
  } catch (err) {
    console.log(err);
  }
})();
