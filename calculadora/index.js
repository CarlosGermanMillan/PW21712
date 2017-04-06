//Agrega al código (un enlace) al main.js
const rq = require('electron-require');
const main= re.remote('./main.js');
var botonesNumero = ["btn00","btn01","btn02","btn03","btn04","btn05",
					"btn06","btn07","btn08","btn09"];
var botonesOperador = ["btnSumar","btnRestar","btnMultiplicar","btnDividir"]

function numeros(){


}
function operadores(){

	
}
function igual(){

	
}
function borrar(){

	
}


for (var i = 0; i < botonesNumero.length; i++) {
	document.getElementByID(botonesNumero[i]).addEventListener('click',numeros);
};

for (var i = 0; i < botonesOperador.length; i++) {
	document.getElementByID(botonesOperador[i]).addEventListener('click',operadores);
};

document.getElementByID("btnIgual").addEventListener('click',igual);

document.getElementByID("btnCE").addEventListener('click',borrar);