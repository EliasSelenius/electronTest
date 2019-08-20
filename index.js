

const {app, BrowserWindow, Menu} = require('electron');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
    });

    mainWindow.loadFile('mainWindow.html');
    

    Menu.setApplicationMenu(Menu.buildFromTemplate([
        {
            label: 'File',
            submenu: [
                {
                    label: 'Quit',
                    click() {
                        app.quit();
                    }
                }
            ]
        },
        {
            label: 'DevTools',
            click() {
                mainWindow.webContents.toggleDevTools();
            }
        },
        {
            label: 'reload',
            click() {
                mainWindow.reload();            
            }
        }
    ]));

});