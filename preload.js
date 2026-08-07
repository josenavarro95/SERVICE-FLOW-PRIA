const { contextBridge } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  // API disponible para la aplicación
});
