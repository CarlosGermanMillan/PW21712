//Variable global
var operador="";
function borrar(){
	operador="";
	document.calculadora.operando1.value=0;
	document.calculadora.operando2.value=0;
	document.calculadora.resultado.value=0;
}

function igual(){
	var valor1=document.calculadora.operando1.value;
	var valor2=document.calculadora.operando2.value;
	document.calculadora.resultado.value=eval(valor1+operador+valor2);
	// if (operador=="+") {
	// 	document.calculadora.resultado.value=valor1+valor2;
	// }
	// if (operador=="-") {
	// 	document.calculadora.resultado.value=valor1-valor2;
	// }
	// if (operador=="*") {
	// 	document.calculadora.resultado.value=valor1*valor2;
	// }
	// if (operador=="/") {
	// 	document.calculadora.resultado.value=valor1/valor2;
	// }
}

function operadores(ope){
	operador=ope;
}

function numeros(num){
	if (operador=="") { //Escribir en el operando 1
		var valorInicial=document.calculadora.operando1.value;
		if (valorInicial=="0") {
			//Elimino el cero
			document.calculadora.operando1.value="";
		}
		//Concatena el vacio con el cero
		document.calculadora.operando1.value=document.calculadora.operando1.value+num;
	}
	else{ //Escribo en el operando 2
		var valorInicial=document.calculadora.operando2.value;
		if (valorInicial=="0") {
			//Elimino el cero
			document.calculadora.operando2.value="";
		}
		//Concatena el vacio con el cero
		document.calculadora.operando2.value=document.calculadora.operando2.value+num;
	}
}