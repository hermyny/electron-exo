const { ipcRenderer } = require('electron');
const path = require('path');

document.querySelector('#page-accueil_go')
    .addEventListener('click', () => {
        ipcRenderer.send('page-deux')
    });