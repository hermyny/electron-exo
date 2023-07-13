// main.js

const { 
  app, 
  BrowserWindow,
 ipcMain, } = require('electron')
const path = require('path')



const createfirstWindow = () => {

  
  const firstWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'assets/images/icon.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  
  firstWindow.loadFile('index.html')
  firstWindow.webContents.openDevTools();

}

const createSecondWindow = () => {

  
  const secondWindow = new BrowserWindow({
    width: 800,
    height: 600,
    icon: 'assets/images/icon.ico',
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      enableRemoteModule: true,
      preload: path.join(__dirname, 'preload.js')
    }
  })

  
  secondWindow.loadFile('src\page\accueil\index.html')
  secondWindow.webContents.openDevTools();

}


app.whenReady()
.then(createfirstWindow)
.then(() => {
  click: () =>
  createSecondWindow();
  firstWindow.close();

  app.on('activate', () => {
    // Sur macOS il est commun de re-créer une fenêtre  lors 
    // du click sur l'icone du dock et qu'il n'y a pas d'autre fenêtre ouverte.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('page-deux', (event, args) => {
  createSecondWindow();
  secondWindow.close();
});



