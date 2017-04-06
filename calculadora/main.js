// const app = require('electron').app
// const BrowerWindow=require('electron').BrowerWindow

const {app,BrowserWindow} = require('electron')
//Ruta donde se encuentra nuestro proyecto
const path=require('path')
//Ruta pero enb formato url
const url=require('url')
let PantallaPrincipal;

function muestraPantallaPrincipal(){
	PantallaPrincipal=new BrowserWindow({
		width:320,
		height:425
	})
	PantallaPrincipal.on('closed',function(){
		PantallaPrincipal=null
	})
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}))
	PantallaPrincipal.show()
}

//La aplicación ejecuta este evento cuando 
//el archivo main.js se carga en memoria.
app.on('ready',muestraPantallaPrincipal)