const { app } = require("electron");
const { initGame } = require("./windows/game");
const { initResourceSwapper } = require("./addons/swapper");

app.on("ready", () => {
  initGame();
  initResourceSwapper();
});

app.on("window-all-closed", () => app.quit());