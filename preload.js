const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("ipcRenderer", {
  send: (name, options) => {
    ipcRenderer.send(name, options);
  },
});
