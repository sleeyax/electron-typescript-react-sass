import { BrowserWindow } from 'electron';
import { join as joinPath } from 'path';
import url from 'url';

export default function createMainWindow(isPackaged: boolean): BrowserWindow {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      devTools: (process.env.NODE_ENV || 'production') !== 'production' || !isPackaged,
    },
  });

  if (process.env.NODE_ENV !== 'production') {
    process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = '1'; // eslint-disable-line require-atomic-updates
    win.loadURL(`http://localhost:2003`);
  } else {
    win.loadURL(
      url.format({
        pathname: joinPath(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true,
      })
    );
  }

  if (process.env.NODE_ENV !== 'production') {
    // Open DevTools, see https://github.com/electron/electron/issues/12438 for why we wait for dom-ready
    win.webContents.once('dom-ready', () => {
      win!.webContents.openDevTools();
    });
  }

  return win;
}
