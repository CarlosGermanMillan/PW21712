
// JSON = JavaScript Object Notation
// conjunto: [
	// llave: valor,
	// llave2: valor,
	// llave3: {
			// llave4: valor,
			// llave5: valor
	// }
//]


//Agrega al código (un enlace) al main.js
const rq    = require('electron-require');
const main  = rq.remote('./main.js');
const $		= require("jquery");

function datosRandom(){
	$.ajax({
	  url: 'https://randomuser.me/api/',
	  dataType: 'json',
	  success: function(data) {
	    //console.log(data);
	    $("#txtNombre").html(data.results[0].name.first+" "+data.results[0].name.last)
	   	$("#txtgender").html(data.results[0].gender)
	   	$("#txtemail").html(data.results[0].email)
	   	$("#txtlocation").html(data.results[0].location.street+" "+
	   							data.results[0].location.city+" "+
	   							data.results[0].location.state+" "+
	   							data.results[0].location.postcode)
	   	$("#txtlogin").html(data.results[0].login.username+"<br>"+
	   						data.results[0].login.password)
	    $("#imgFoto").attr("src",data.results[0].picture.large)
	  },
	  error(a,b,c){
	  	alert("Sin internet o sin servidor");
	  }
	});
}
$("#btnInfo").on("click",datosRandom);



   

