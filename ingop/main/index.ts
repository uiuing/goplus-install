// ! ipc Main is a global file, containing the root function for the renderer's communication events with the process.
import './ipc/index'

import { app, BrowserWindow, Menu } from 'electron'
import isDev from 'electron-is-dev'
import prepareNext from 'electron-next'
import { join } from 'path'

import { autoScreenSize } from './server/utils'

// Prepare the renderer once the app is ready
app.on('ready', async () => {
  await prepareNext('./renderer')

  const mainWindow = new BrowserWindow({
    ...autoScreenSize(),
    resizable: isDev,
    maximizable: false,
    center: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: false,
      preload: join(__dirname, 'preload.js')
    }
  })

  const url = isDev
    ? 'http://localhost:8000/'
    : new URL(
        join(__dirname, '../renderer/dist/index.html'),
        'file:'
      ).toString()

  await mainWindow.loadURL(url)

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })
})

if (!isDev) {
  Menu.setApplicationMenu(null)
  app.dock.hide()
}

// Quit the app once all windows are closed
app.on('window-all-closed', app.quit)
