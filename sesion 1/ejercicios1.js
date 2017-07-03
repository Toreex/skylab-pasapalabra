// a) Puedes contar cuantas letras tiene tu nombre?

function countLeters (){
	var name = "Didac"
	var count = name.length;
	console.log(count);
}

contLeter();

// b) Añade tu apellido e indica en que posición se encuentra

function surnamePos (){
	var name = "Didac";
	var surname = "Tey";
	var completName = name + " " + surname;
    var posicion = completName.indexOf("Tey");
    console.log(posicion);
}

surnamePos();

// c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre.

function onlyName (){
	var completName = "Didac Tey";
	var name = completName.substring(0, 6);
	console.log(name);
}

onlyName();

// d) Ahora, solo tu apellido.

function onlyName (){
	var completName = "Didac Tey";
	var name = completName.substring(5);
	console.log(name);
}

onlyName();	

// d1) Iguala el resultado a una variable nueva e imprímela por pantalla.

function onlyName (){
	var completName = "Didac Tey";
	var name = completName.substring(5);
	console.log(name);
}

onlyName();

// e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios.

function replace (){
	var name = "Didac Tey";
	var name2 = "Mr";
	var nameSr = name2 + " " + name.substring(5);
	console.log(nameSr);
}

replace();

// f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS.

function surnameMayus (){
	var totalName = "Didac Tey";
	var surname = totalName.substring(6);
	var surnameMayus = surname.toUpperCase();
	console.log(surnameMayus);
}

surnameMayus();

//g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje.

function newVar (){
	var surnameMayus = "TEY";
	var newVar = "Este es mi apellido en mayusculas : " + surnameMayus;
	console.log(newVar);
}

newVar();

//h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?

function first (){
	var totalName = "Didac Tey";
	console.log(totalName.charAt(0) + totalName.charAt(6));
}

first();

//array


//a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/"

function name (){
	var name = "Didac Tey Bosch";
	var nameArray = name.split("");
	var nameString = nameArray.join("/")
	console.log(nameString);
}

name();

//b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|"

function surname (){
	var name = "Didac Tey";
	var surname = name.substring(6);
	var surnameSeparated = surname.split("");
	var surnameJoin = surnameSeparated.join("|");
	console.log(surnameJoin);
}

surname();

//c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for)

function letterPos (){
	var name = "Didac";

	for(var i = 0; i < name.length; i++){
		console.log(name[i] + " => " + i);
	}
}
letterPos();

//d)Como en el ejercicio anterior, pero seleccionando tu apellido

function onlySurname (){
	var totalName = "Didac Tey";

	for(var i = totalName.indexOf("T"); i < totalName.length; i++){

		console.log(totalName[i] + " => " + i);
	}
}

onlySurname();

//e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings

function firstLetter (){
	var totalName = ["D","i","d","a","c", "T","e","y"];
var totalNameJoin = totalName.join("");
	var totalNameResult = totalNameJoin.charAt(0) + "." + totalNameJoin.charAt(6);
	
	console.log(totalNameResult);
}

firstLetter();


/* f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad.
 Muestra por pantalla solo tu nombre y tu edad en un solo mensaje.*/

function nameCompletAge (){
	var info = ["Didac", "Tey", "31"];
	var result = info.join(" ");
	var nameAge = "Mi nombre es : " + result.substring(0, 5) + " y mi edad es : " + result.substring(10, 12);
	console.log(nameAge);
}

nameCompletAge();

/* g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array,
 así aseguraremos los cambios.*/

 function adCity (){
 	var info = ["Didac", "Tey", "31"];
 	var city = "Barcelona";
 	var adCity = info.concat(city);
 	var adCityJoin = adCity.join(", ");
 	console.log(adCityJoin);
 }

 adCity();(
 
  // h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.
 
  function outCity (){
  	var info = ["Didac", "Tey", "31", "Barcelona"];
    var joinInfo = info.join(", ")
    var subInfo = joinInfo.substring(0, 14);


  	console.log(subInfo);
 }

 outCity();

// j) Ahora, elimina el nombre y asegura los cambios

function outName (){
	var info = ["Didac","Tey","31","Barcelona"];
	var outNameInfo = info.shift();
	return info.join(", ");
}

outName();

/* k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición,
 como podria hacer para introducirlo en la primera posición?*/

 function  newNameArray (){
 	var info = ["Tey","31","Barcelona"];
 	info.reverse().push("Didac");
 	var newInfo = info.reverse().join(", ");
 	console.log(newInfo);
 }

 newNameArray();

 // l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos.

 function numberX2 (){
 	var number = [0,1,2,3,4,5,6,7,8,9,10];
 	for(var i = 0; i< number.length; i++){
 		console.log(number[i] * 2);
 	}
 }

 numberX2();

 // l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array.

function numberX (){
 	var number = [0,1,2,3,4,5,6,7,8,9,10];
 	var numberX = prompt("añadir numero de multiplicar");
 	for(var i = 0; i< number.length; i++){
 		console.log(number[i] * numberX);
 	}
 }

 numberX();

 // m) Podrías mostrarlos en el orden inverso?

 function numberX (){
 	var number = [0,1,2,3,4,5,6,7,8,9,10];
var numberRev = number.reverse();
 	var numberX = prompt("añadir numero de multiplicar");
 	for(var i = 0; i< numberRev.length; i++){
var result = numberRev[i] * numberX;
 		console.log(result);
 	}
 }

 numberX();

 // Numbers

 // a) Que hora es? Declara la hora como número y devuelvela como String

 function hour (){
 	var hour = [0.08];
 	var hourString = hour.join();
 	console.log("Son las " + hourString);
 }
 hour();

 // b) Nono, que hora exactamente? Dime la hora sin minutos

 function onlyHour (){
 	var hour = [22];
 	var hourString = hour.join();

 	var minutes = [21];
 	var minutesString = minutes.join();

 	console.log("Son las " + hourString);

 }
onlyHour();

// c) Ahora, declara tu hora y muéstrala redondeada.

function hourRoundOut (){
	var hour = 23.29;
if (hour < 23.30){
	console.log(Math.round(hour));
} else {
    console.log(Math.ceil(hour));
  }
 }

hourRoundOut();

// d) Hagamos una calculadora. Primero, la suma.

function calc (){
	var num1 = prompt("numero :");
	var num2 = prompt("numero :");
	var sum = parseInt(num1) + parseInt(num2);
	console.log(sum);
}

calc();

// d1) Añade la resta...

function calc (){
	var num1 = prompt("numero :");
	var num2 = prompt("+ numero :");
	var sum = parseInt(num1) + parseInt(num2);

	var num3 = prompt("numero :");
	var num4 = prompt("- numero :");
	var rest = parseInt(num3) - parseInt(num4);

	console.log(sum + rest);
}

calc();

// d2) Y la multiplicación

function calc (){
	var num1 = prompt("numero :");
	var num2 = prompt("+ numero :");
	var sum = parseInt(num1) + parseInt(num2);

	var num3 = prompt("numero :");
	var num4 = prompt("- numero :");
	var rest = parseInt(num3) - parseInt(num4);

    var num5 = prompt("numero :");
	var num6 = prompt("* numero :");
	var mult = parseInt(num5) * parseInt(num6);

	console.log(sum + rest + mult);
}

calc();

// d3) Por ultimo, la división

function calc (){
	var num1 = prompt("numero :");
	var num2 = prompt("+ numero :");
	var sum = parseInt(num1) + parseInt(num2);

	var num3 = prompt("numero :");
	var num4 = prompt("- numero :");
	var rest = parseInt(num3) - parseInt(num4);

    var num5 = prompt("numero :");
	var num6 = prompt("* numero :");
	var mult = parseInt(num5) * parseInt(num6);

    var num7 = prompt("numero :");
	var num8 = prompt("/ numero :");
	var div = parseInt(num7) / parseInt(num8);

	console.log(sum + rest + mult + div);
}

calc();

// d4) Ahora, intenta multiplicar un número por una string, que devuelve?

function multNumber (){
	var num = prompt("numero: ");
	var string = "Hola";
	console.log(num * string);
}

multNumber();

// e) Podemos controlar este error con un condicional if?

function controlNan (){
	var num = prompt("numero: ");
	var string = "Hola";
	console.log(num * string.length);
}

controlNan();
