const electron = require('electron')

const app = electron.app
const browswerWindow = electron.BrowserWindow
const ipc = electron.ipcMain

app.on('ready', _ => {
    console.log('APP IS READY')
    mainWindow = new browswerWindow({
        height:1080,
        width:1920,
    })

    mainWindow.loadURL(`file://${__dirname}/landing.html`)

    mainWindow.on('closed', _ =>{
        console.log('CLOSING MAIN WINDOW')
        mainWindow = null
    })
})