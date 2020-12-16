import { app, BrowserWindow } from 'electron';
import { installExtensions } from './helpers';
import createMainWindow from './windows/mainwindow';

let win: BrowserWindow | null;

const createWindow = async () => {
  if (process.env.NODE_ENV !== 'production') await installExtensions();

  win = createMainWindow(app.isPackaged);

  win.on('closed', () => {
    win = null;
  });
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (win === null) createWindow();
});
