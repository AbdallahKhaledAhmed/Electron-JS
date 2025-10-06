const {
  app,
  BrowserWindow,
  ipcMain,
  screen,
  desktopCapturer,
  shell,
  Tray,
  Menu,
  globalShortcut,
} = require("electron");
const path = require("path");
const fs = require("fs");
const isDev = !app.isPackaged;

(async function () {
  try {
    await app.whenReady();
    const tray = new Tray(path.join(__dirname, "assets/camera.ico"));
    const trayMenu = Menu.buildFromTemplate([
      {
        label: "Quit",
        click: () => {
          app.quit();
        },
      },
    ]);
    tray.setContextMenu(trayMenu);
    tray.on("click", () => {
      if (mainWindow.isVisible()) {
        mainWindow.hide();
      } else {
        mainWindow.show();
      }
    });
    ipcMain.on("takeShot", takeScreenshot);
    globalShortcut.register("Shift+F10", takeScreenshot);
    const mainWindow = new BrowserWindow({
      webPreferences: {
        preload: path.join(__dirname, "preload.js"),
      },
      transparent: true,
      frame: false,
      resizable: false,
      show: false,
      width: 125,
      height: 135,
    });

    mainWindow.loadFile("./renderer/index.html");
  } catch (err) {
    console.log(err);
  }
})();

const takeScreenshot = async () => {
  let screenSize = screen.getPrimaryDisplay().bounds;
  const scaleFactor = screen.getPrimaryDisplay().scaleFactor;
  screenSize.width = screenSize.width * scaleFactor;
  screenSize.height = screenSize.height * scaleFactor;
  const screens = await desktopCapturer.getSources({
    types: ["screen"],
    thumbnailSize: { width: screenSize.width, height: screenSize.height },
  });

  const screenShot = screens[0].thumbnail.toPNG();
  const currentDate = new Date().toISOString().replace(/[:.]/g, "-");
  const fileName = `Screenshot-${currentDate}.png`;
  const appPath = isDev
    ? app.getAppPath()
    : path.dirname(path.dirname(app.getAppPath()));
  const filePath = path.join(appPath, "Screenshots", fileName);
  fs.mkdirSync(path.join(appPath, "Screenshots"), { recursive: true });
  fs.writeFile(filePath, screenShot, (err) => {
    if (err) {
      console.error(err);
    } else {
      shell.openExternal(`file://${filePath}`);
    }
  });
};
