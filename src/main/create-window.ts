import { BrowserWindow } from 'electron'
import { join } from 'path'
import { format } from 'url'

// default dimensions
const DIMENSIONS = { width: 800, height: 500 }

/**
 * Creates the main window.
 *
 * @param appPath The path to the bundle root.
 * @return The main BrowserWindow.
 */
export function createWindow(appPath: string) {
  const window = new BrowserWindow(DIMENSIONS)

  // load entry html page in the renderer.
  window.loadURL(
    format({
      pathname: join(appPath, 'out/index.html'),
      protocol: 'file:',
      slashes: true
    })
  )

  return window
}