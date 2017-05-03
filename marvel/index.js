const rq   = require('electron-require');
const main = rq.remote('./main.js');
const $    = require("jquery");
//COnstantes para imprimir en PDF (Venta que imprimimos)
const ipc = require('electron').ipcRenderer
const btnPDF = document.getElementById('btnPDF')
btnPDF.addEventListener('click',function(event){
	ipc.send('print-to-pdf')

})
//http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith=
var buscarPersonaje = function(){
	var personaje = $("#txtPersonaje").val();
	var url = "http://gateway.marvel.com/v1/public/characters?ts=1&apikey=67788e74df746a1523d8ebb504ee1008&hash=cf5ec9bfa5a156f031a69417cd0e012c&nameStartsWith="
	var cantidadComics = 0;
	var cadenaComics = "";
	if(personaje == ""){
		alert("Ingrese el personaje")
		%("#txtPersonaje").focus();
		return //hace que se salga de la funcion personaje y continue
	}
	url = url+personaje;
	$.ajax({
		beforeSend : function(){
			$("#imgLoader").show();
		},
		dataType: "json",
		url: url,
		success: function(response){
			$("#imgLoader").hide();
			if(response.code==200){ //ok.cat
				$("#imgFoto").show("slow");
				$("#imgFoto").attr("src",response.data.results[0].thumbnail.path+"."+
										 response.data.results[0].thumbnail.extension)
				$("#txtNombre").html(response.data.results[0].name);
				$("#txtDescripcion").html("")
				//Validamos si hay o no descripción del personaje
				if(response.data.results[0].description!=""){
					$("#txtDescripcion").html("<b>Descripcion: <b>"+response.data.results[0].description);
				}
				cantidadComics = response.data.results[0].comics.returned;
				for(var i=0;i<cantidadComics;i++){
					cadenaComics+=response.data.results[0].comics.items[i].name+"<br>"
				}
				$("#txtComics").html(cadenaComics);
			}
		}
	})
	$("#txtPersonaje").val(""); //Vaciamos el cuadro de texto
	$("#txtPersonaje").focus(); //ponemos el cursor ahí
}
var teclaPersonaje = function(tecla){
	//Enter = 10 , 13 (avance de linea y retorno de carro)
	if(tecla.which == 13){
		buscarPersonaje();
	}
}
//Porsiciona el cursor en el cuadro de texto
$("#txtPersonaje").focus(); 
//aCTIVAR LAS TECLAS QUE SE PRESIONAN EN EL CUADRO DE TEXTO
$("#txtPersonaje").on("keypress",teclaPersonaje);
//Evento del botón btnBuscar-click
$("#btnBuscar").on("click",buscarPersonaje);