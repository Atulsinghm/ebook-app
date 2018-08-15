const { BrowserWindow, app } = require("electron");

function createWindow() {
  window = new BrowserWindow({
    width: 1200,
    height: 700,
    title: "Test"
  });
  window.loadFile("index.html");
}

app.on("ready", createWindow);
