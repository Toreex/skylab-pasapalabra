// Reto de la Calculadora.

	function calculator (){
		var num1 = prompt("numero ?");
		num1 === "" ? num1 = null : parseInt(num1);                

		var num2 = prompt("numero ?");
		num2 === "" ? num2 = null : parseInt(num2);

		/* Pregunta si num1 esta vacio, si esta vacio pasalo a null,
		   si no , pasalo a numero.*/
		
		if(num1 == null || !/^([0-9])*$/.test(num1)){

			console.log(Math.sqrt(num2));
			console.log("Solo son validos los numeros. Error en opcion 1");

		} else if (num2 === null || !/^([0-9])*$/.test(num2)) {

			console.log(Math.sqrt(num1));
			console.log("Solo son validos los numeros. Error en opcion 2");
		}

	// Math.sqrt hace de un numero una raiz cuadrada.
	// El if es para identificar si se introduce un numero, si no es asi, aparece el texto del if.

		else {

			// SUMA
		var sum = parseInt(num1) + parseInt(num2);
		console.log("El resultado de " + num1 + "+" + num2 + " es " + sum);

	    //RESTA
	   	var rest = parseInt(num1) - parseInt(num2);

		console.log("El resultado de " + num1 + "-" + num2 + " es " + rest);

		//MULTIPLICAR
	   	var mult = parseInt(num1) * parseInt(num2);

		console.log("El resultado de " + num1 + "*" + num2 + " es " + mult);

		//DIVIDIR
	   	var div = parseInt(num1) / parseInt(num2);

		console.log("El resultado de " + num1 + "/" + num2 + " es " + div.toFixed(3));

		}

       // Este if determina si las dos variables informacion, se aplica la var result, si es false, no aparece nada.

		if( num1 === num2){
			var result = "Los resultados son " + sum + ", " + rest + ", " + mult + ", " + div;
		console.log(result.split());
		} else { 
			console.log("")
		}
		

	}

	calculator();

	var reCalc = prompt("Desea hacer alguna otra operacion ? si / no");
	switch(reCalc){

    case "si":
              calculator();
    break;

	case "no":
	          console.log("Hasta otra!");
	break;
	}
	