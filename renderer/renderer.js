const img = document.querySelector("#img");

img.addEventListener("click", () => {
  window.ipcRenderer.send("takeShot");
});
