//const app = require('electron').app
//const BrowserWindow = require('electron').BrowserWindow
const {app,BrowserWindow} = require('electron')
const electron = require('electron')
//ruta donde se encuentra nuestro proyecto
const path = require('path')
//Ruta pero en formato URL
const url = require('url')
//Constantes para impresion en PDF
const fs = require('fs') //sistemas de archivos
const os = require('os') //sistema operativo
//lamada a procedimiento interno
const ipc = electron.ipcMain
//Interfaz de comandos o terminal 
const shell = electron.ipcMain

//Evento para imprimir
ipc.on('print-to-pdf',function(event){
	const pdfPath = path.join(os.tmpdir(),'print.pdf')
	const win = BrowserWindow.fromWebContents(event.Sender)
	win.WebContents.printToPDF({},function(error,data){
		if(error) throw error
		fs.writeFile(pdfPath,data,function(error){
			if(error){
				throw error
			}
			shell.openExternal('file://'+pdfPath)
		})
	})
})


let PantallaPrincipal;

function muestraPantallaPrincipal(){
	PantallaPrincipal = new BrowserWindow({
		width:1024,
		height:768
	})
	PantallaPrincipal.on('closed',function(){
		PantallaPrincipal = null
	})
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),
		protocol: 'file',
		slashes: true
	}))
	//PantallaPrincipal.openDevTools(); 
	 //Muestra la consola, sirve en caso de tener un error
	PantallaPrincipal.show()
}

//La aplicación ejecuta este evento cuando 
//el archivo main.js se carga en memoria
app.on('ready',muestraPantallaPrincipal)