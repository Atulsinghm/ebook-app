const { BrowserWindow, app, Menu } = require("electron");
const { stat }  = require("fs-extra/lib/fs");


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

  stat("index.html", function(err) {
    if (err == null) {
      console.log("Index.html exists");
      window.loadFile("index.html");
    } else if (err.code == "ENOENT") {
      console.log("Index.html does not exist and will now load main site");
      window.loadURL("https://getfreestorybooks.weebly.com");
    } else {
      console.log("Some other error has occured. ERRCODE: ", err.code);
    }
  });
}

app.on("ready", createWindow);
