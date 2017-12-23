const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// Keep global reference of window object so JS garbage collector
// does not automatically close the window
let win

function createWindow() {
  // Create the browser window
  win = new BrowserWindow({width: 800, height: 600})

  // Load index.html of the app
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open DevTools
  //win.webContents.openDevTools()

  // Emitted when window is closed
  win.on('closed', () => {
    win = null
  })
}

// Called when Electron has finished initialization
app.on('ready', createWindow)

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // If on Mac, only quit once user presses CMD + Q
  if(process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // If on Mac, reactivate if dock icon is clicked and no other windows are open
  if(win == null) {
    createWindow()
  }
})

// App-specific main processes here
