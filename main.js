const { BrowserWindow, app, Menu } = require("electron");

function createWindow() {
  window = new BrowserWindow({
    width: 1200,
    height: 700,
    title: "Test"
  });

  const template = [
    {
      label: "File",
      submenu: [{ role: "quit" }]
    },
    {
      label: "View",
      submenu: [
        { role: "reload" },
        { role: "forceReload" },
        { type: "separator" },
        { role: "zoomIn" },
        { role: "zoomOut" },
        { role: "resetZoom" },
        { type: "separator" },
        { role: "toggleDevTools" },
        { role: "toggleFullScreen" }
      ]
    },
    {
      label: "Window",
      submenu: [
        { role: "minimize" },
        {
          label: "Maximize",
          click() {
            window.maximize();
          }
        }
      ]
    }
  ];

  let menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  window.loadFile("index.html");
}

app.on("ready", createWindow);
