const img = document.querySelector("#img");

img.addEventListener("click", () => {
  window.ipcRenderer.send("Status", {
    love: "404 not found",
    money: "404 not found",
    codingSkills: "200 ok",
  });
});
