// a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola.

function sayHello (){

	var name = "Didac";
	console.log("Hola mi nombre es " + name);
}
sayHello();


// b) Intenta retornar los valores en lugar de usar console.log

function sayHello (){

	var name = "Didac";

	return "Hola mi nombre es " + name;

}
sayHello();

// c) Ahora, añade tu edad y concaténala al return

function sayHello (){

	var name = "Didac";
	var age = 32;
	return "Hola mi nombre es " + name + " y tengo " + age;

}
sayHello();

// d) Iguala tu función a una variable y ejecútala

var myFunction = function sayHello (){

	var name = "Didac";
	var age = 32;
	return "Hola mi nombre es " + name + " y tengo " + age;

}
myFunction();

// e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados Now, try to declare other function and assign it result to other variable called myAge,
// and try to print the result of both functions in one line.


var myName = function sayHello (){

	var name = "Didac";
	
	return name;




var myAge = function age (){
	var ageMy = 32;
	return ageMy;
}

}

myName() + " " + myAge();

// e1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.

var myName = function sayHello (){

	var name = "Didac";
	

	var number = function numberRandom(min, max){

  var randomNumber = Math.floor(Math.random() * (11 - 0)) + 0;
  var age = 32 + randomNumber;
  return age;
	}

return name + " " + number();

}


myName();

// f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones.


var myName = function sayHello (parameter1){

	var name = parameter1;
	

	var number = function numberRandom(parameter2){

  var randomNumber = Math.floor(Math.random() * (11 - 0)) + 0;
  var age = parameter2 + randomNumber;
  return age;
	}

return name + " " + number(32);

}


myName("didac");

// g) Intenta englobar todas las funciones en una sola funcion padre,
// el return de dicha función padre deberá ser la llamada a las funciones hijas

function father (){

	var myName = function sayHello (parameter1){

	var name = parameter1;
	return name;
}
	var myAge = function ageMy(parameter2){
	var randomNumber = Math.floor(Math.random() * (11 - 0)) + 0;
    var age = parameter2 + randomNumber;
    return age;
  	}


var x = myName("Didac ");
var y = myAge(32);
return x + y;
}
father();

// h) Haz otra función hija que solo devuelva un número random,
//ese número random será el argumento que se pasará como parámetro a la función age()


function father (){

	var myName = function sayHello (parameter1){

	var name = parameter1;
	return name;
}
	var myAge = function ageMy(parameter2){
	var age = parameter2;
    return age;
}

	var randomNumber = function random (){
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

var x = myName("Didac ");
var y = myAge(randomNumber());
return x + y;
}
father();

// i) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es < 20 y otro si es de 21 - 50


function father (){

	var myName = function sayHello (parameter1){

	var name = parameter1;
	return name;
}
	var myAge = function ageMy(parameter2){
	var age = parameter2;
    return age;
}

	var randomNumber = function random (){
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

var x = myName("Didac ");
var y = myAge(randomNumber());

if(y < 20){
	return x + y + " " + "Es menor de 20 !";
} else if(y > 20){
	return x + y + " " + "Es mayor de 20 !";
}

}

father();

// j) Al return de la función name(), concaténale otro mensaje


function father (){

	var myName = function sayHello (parameter1){

	var name = parameter1;
	return name + "y tengo ";
}
	var myAge = function ageMy(parameter2){
	var age = parameter2;
    return age;
}

	var randomNumber = function random (){
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

var x = myName("Didac ");
var y = myAge(randomNumber());

if(y < 20){
	return x + y + ", " + "Es menor de 20 !";
} else if(y > 20){
	return x + y + ", " + "Es mayor de 20 !";
}

}

father();

// k) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable


function father (){

	var myName = function sayHello (parameter1){

	var name = parameter1;
	return name;
}
	var myAge = function ageMy(parameter2){
	var age = parameter2;
    return age;
}

	var randomNumber = function random (){
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

var x = myName("Didac ");
var y = myAge(randomNumber());

if(y < 20){
	return "Hello my name is " + x + "i have " + y + " years, " + "My age is under 20 !";
} else if(y > 20){
	return "Hello my name is " + x + "i have " + y + " years, " + "My age is over 20 !";
}

}

father();

// l) Modifica la primera función y la función padre para,
//si el parámetro introducido no es tu nombre, no siga con la segunda llamada


function father (){

	var myName = function sayHello (parameter1){ // function nombre !
	var name = parameter1.toLowerCase();
	return name;
}


	var myAge = function ageMy(parameter2){ // Function años !
	var age = parameter2;
    if(age <=20){
    	return age + " My age is under 20 !";
    }else{
    	return age + " My age is over 20 !";
    }
}

	var randomNumber = function random (){ // Function que hace numero random !!
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

var x = myName("Didac");
var y = myAge(randomNumber());

if(x === "didac"){
	return "Hello my name is " + x + " i have "+ y;
   }else{
	return x + " You are not Didac";
}

}

father();

// m) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre.
// Retorna a la funcion padre y concaténalo en el return padre.

	var randomNumber = function random (){ // Function que hace numero random !!
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

function father (){

	var myName = function sayHello (parameter1){ // function nombre !
	var name = parameter1.toLowerCase();
	if( name === "didac"){
	return name;
} else {
	console.log(name + " You're not Didac !!!");
}
}

	var myAge = function ageMy(parameter2){ // Function años !
	var age = parameter2;
    return age;
}



var x = myName("Didac");
var y = myAge(randomNumber());

if(y < 20){
	return "Hello my name is " + x + " i have " + y + " years, " + "My age is under 20 !";
} else if(y > 20){
	return "Hello my name is " + x + " i have " + y + " years, " + "My age is over 20 !";
}

}

father();

// n) Refactorizemos nuestro código dejando todas las funciones separadas del padre,
// éste último se encargará de llamarlas todas y mostrar sus resultados.

	var randomNumber = function random (){ // Function que hace numero random !!
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

return myName = function sayHello (parameter1){ // function nombre !
	var name = parameter1.toLowerCase();
}

	var myAge = function ageMy(parameter2){ // Function años !
	var age = parameter2;
    return age;
}


function father (){
return "Hello my name is " + myName("Didac") + " and this is my age " + myAge(randomNumber());

}

father();

// Ñ) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre,
// muestra los resultados de esta array como siempre.


	var randomNumber = function random (){ // Function que hace numero random !!
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

	var	myName = function sayHello (parameter1){ // function nombre !
	var name = parameter1.toLowerCase();
	return name;
}

	var myAge = function ageMy(parameter2){ // Function años !
	var age = parameter2;
    return age;
}


function father (){
	var unyFunction = [];
unyFunction.push("Hello my name is " + myName("Didac") + " and this is my age " + myAge(randomNumber()));
return unyFunction;
}

father();

// o) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla,
// deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.


	var randomNumber = function random (){ // Function que hace numero random !!
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

	var	myName = function sayHello (parameter1){ // function nombre !
	var name = parameter1.toLowerCase();
	return name;
}

	var myAge = function ageMy(parameter2){ // Function años !
	var age = parameter2;
    return age;
}


function father (parameter3){
	var unyFunction = [];
unyFunction.push("Hello my name is " + myName("Didac") + " and this is my age " + myAge(randomNumber()));
return parameter3 + unyFunction;
}

father();

//----------arriba primera parte function-----abajo la otra function llamando a la primera + añadiendo----------//

function grandFather (){
	var starDark = [];
	starDark.push("hello from the dark side...");
	return starDark = father(starDark);

    
}
grandFather();

// p1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS.
//Muestra por pantalla los objetos sin estilizar el output.

function father (){


	var	myName = function sayHello (parameter1){ // function nombre !
	var name = parameter1;
	return name;
}

var randomNumber = function random (){ // Function que hace numero random !!
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

	var myAge = function ageMy(parameter2){ // Function años !
	var age = parameter2;
    return age;
}

// Con esta funcion creamos un molde para pasar las variables y poder crear objetos.El objeto tendrá dos parametros, name,age.
function newObjects(name, age){
	this.name = name;
	this.age = age;
}

// Creamos una variable que recoge el nombre generado en la primera funcion myFunctionNameIsThis.
// Creamos una segunda variable que recoge la edad a través de dos funciones, 
// Creamos una nueva variable que recoge en forma de array las dos variables creadas anteriormente.
var newName = myName("Didac");
var newAge = myAge(randomNumber());
var result = [newName, newAge];

/* Ahora mediante la siguiente variable creada, la pasamos por el molde creando un nuevo objeto con NEW. Muy importante NEW. 
Entre parentesis le estamos diciendo que recoja la primera posición del array(result[0]) como primer parametro de la función
y la segunda posición del array(result[1]) como segundo parametro que será la edad. */
var newInformation = new newObjects(result[0], result[1]);
console.log(newInformation);

}

father();

// p2) Muestra los resultados de los OBJECTS recorriendolos y mostrando los valores de una forma amigable.

function father (){


	var	myName = function sayHello (parameter1){ // function nombre !
	var name = parameter1;
	return name;
}

var randomNumber = function random (){ // Function que hace numero random !!
		var rNum = Math.floor(Math.random() * (51 - 0)) + 0;
		return rNum;
	}

	var myAge = function ageMy(parameter2){ // Function años !
	var age = parameter2;
    return age;
}

// Con esta funcion creamos un molde para pasar las variables y poder crear objetos.El objeto tendrá dos parametros, name,age.
function newObjects(name, age){
	this.name = name;
	this.age = age;
}

// Creamos una variable que recoge el nombre generado en la primera funcion myFunctionNameIsThis.
// Creamos una segunda variable que recoge la edad a través de dos funciones, 
// Creamos una nueva variable que recoge en forma de array las dos variables creadas anteriormente.
var newName = myName("Didac");
var newAge = myAge(randomNumber());
var result = [newName, newAge];

/* Ahora mediante la siguiente variable creada, la pasamos por el molde creando un nuevo objeto con NEW. Muy importante NEW. 
Entre parentesis le estamos diciendo que recoja la primera posición del array(result[0]) como primer parametro de la función
y la segunda posición del array(result[1]) como segundo parametro que será la edad. */
var newInformation = new newObjects(result[0], result[1]);
console.log(newInformation);

}

father();

var x = name;
var y = age;
console.log("Hello my name is " + x + " and i have " + y + " years");