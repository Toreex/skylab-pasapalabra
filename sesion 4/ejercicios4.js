// a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...),
// además, cada elemento de la pareja deberá estar multiplicada por 2.

function showNums(){
    var nums = [1,2,3,4,5,6,7,8,9]
    for(var i = 0; i < nums.length-1; i++){
        var pairs = []
        console.log(nums[i] + " - " + nums[i+1]);
    }
}
showNums();

// solucion 2.

function showNums(){
    var nums = [1,2,3,4,5,6,7,8,9]
    for(number in nums){
        console.log(nums[number] * 2 + " - " + nums[parseInt(number)+1] * 2);
    }
}
showNums();

// a1) La funcion debería aceptar la array a tratar como argumento.

function showNums(){
    var nums = arguments
    for(number in nums){
        console.log(nums[number] * 2 + " - " + nums[parseInt(number)+1] * 2);
    
    }
}
showNums(1,2,3,4,5,6,7,8,9);

// a2) Pasa también el numero a multiplicar a la función como argumento.


function showNums(){
    var nums = arguments
    var mult = arguments[8];
    console.log("El numero escogido es: " + mult);
    for(number in nums){
        console.log(nums[number] * mult + " - " + nums[parseInt(number)+1] * mult);
    
    }
}
showNums(1,2,3,4,5,6,7,8,9,);

// a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total.


function showNums(){
    var nums = arguments;
    var mult = arguments[8];
    var delim = arguments[9];
    console.log("El numero escogido es: " + mult);
    console.log("Se quieren mostrar las " + delim + " primeras parejas");
    for(var i = 0; i< delim; i++){
        console.log(arguments[i] * mult + " - " + arguments[parseInt(i)+1] * mult);
    
    }
}
showNums(1,2,3,4,5,6,7,8,9, 3);

// b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci?

function fibonacci (){
	var fibo = [0, 1];
	for( var i = 0; i<10; i++){
		 fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);
	}
	console.log(fibo);
}

fibonacci();

// b2) Puedes añadir además, la posición de cada resultado?


function fibonacci (){
	var fibo = [0, 1];
	for( var i = 0; i<10; i++){
		 fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);

		 var posFibo = fibo.indexOf(fibo[i]);
		 console.log(fibo[i] + " - " + posFibo);
	}

}

fibonacci();

// b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.


function fibonacci (){
	var fibo = [0, 1];
	for( var i = 0; i<10; i++){
		 fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);

		 var posFibo = fibo.indexOf(fibo[i]);
		 var resultFibo = "El numero " + fibo[i] + " tiene la posicion " + posFibo;
console.log(resultFibo);
	}

}

fibonacci();

//  b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.


function fibonacci (num){
	var fibo = [0, 1];
	for( var i = 0; i<num +1; i++){
		 fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);

		 var posFibo = fibo.indexOf(fibo[i]);
		 var resultFibo = "El numero " + fibo[i] + " tiene la posicion " + posFibo;
console.log(resultFibo);
	}

}

fibonacci(10);

// b5) Ahora, muestra los resultados en forma piramidal:


function fibonacci (num){
	var fibo = [0, 1];
	for( var i = 0; i<num +1; i++){
		 fibo.push(fibo[fibo.length-1] + fibo[fibo.length-2]);
console.log(fibo.join());
	}

}

fibonacci(10);

function fibonacci2(num){
	var fibo2 = [0, 1];
	for( var i = 0; i<num +1; i++){
		 fibo2.push(fibo2[fibo2.length-1] + fibo2[fibo2.length-2]);
	}	

	for(i = 0; i < num; i++){
	fibo2.pop();
	console.log(fibo2.join());
}
}
fibonacci2(10);

// c) Simple Scripting program. Crea un programa que transforme un número
// de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creandio un nuevo código.


function codeScript(code){
	var codeNum = code.toString();

var firstCall = codeNum.substring(1) + codeNum.charAt(0);
console.log(firstCall);

var firstCall2 = firstCall.substring(1) + firstCall.charAt(0);
console.log(firstCall2);

var firstCall3 = firstCall2.substring(1) + firstCall2.charAt(0);
console.log(firstCall3);

var firstCall4 = firstCall3.substring(1) + firstCall3.charAt(0);
console.log(firstCall4);

}

codeScript(3712);

// c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver
// los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)

function codeScript(code1, code2){
	var codeNum = code1.toString();
	var codeNum2 = code2.toString();

var firstCall = codeNum.substring(1) + codeNum.charAt(0);
var firstCall1 = codeNum2.substring(1) + codeNum2.charAt(0);
console.log(firstCall + " " + firstCall1);

var secondCall1 = firstCall.substring(1) + firstCall.charAt(0);
var secondCall2 = firstCall1.substring(1) + firstCall1.charAt(0);
console.log(secondCall1 + " " + secondCall2);

var thirdCall1 = secondCall1.substring(1) + secondCall1.charAt(0);
var thirdCall2 = secondCall2.substring(1) + secondCall2.charAt(0);
console.log(thirdCall1 + " " + thirdCall2);

var fourCall1 = thirdCall1.substring(1) + thirdCall1.charAt(0);
var fourCall2 = thirdCall2.substring(1) + thirdCall2.charAt(0);
console.log(fourCall1 + " " + fourCall2);

}

codeScript(3712, 4897);

// c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos,
// multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10.
// (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)

function codeScript(code1, code2){
	var codeNum = code1.toString();
	var codeNum2 = code2.toString();

var firstCall = codeNum.substring(1) + codeNum.charAt(0);
var firstCall1 = codeNum2.substring(1) + codeNum2.charAt(0);
console.log(firstCall[0]*1 +''+ firstCall[1]*8 +''+ firstCall[2]*4 +''+ firstCall[3]*3 + " " + firstCall1[0] * 1 + '' + firstCall1[1] *1 + '' + firstCall1[2] *1 + '' + firstCall1[3] * 2 );

var secondCall1 = firstCall.substring(1) + firstCall.charAt(0);
var secondCall2 = firstCall1.substring(1) + firstCall1.charAt(0);
console.log(secondCall1[0] *2 +''+ secondCall1[1] *4 +''+ secondCall1[2] *2 +''+ secondCall1[3] *1 + " " + secondCall2[0] *1 +''+ secondCall2[1] *1 +''+ secondCall2[2] *2 +''+ secondCall2[3] *1);

var thirdCall1 = secondCall1.substring(1) + secondCall1.charAt(0);
var thirdCall2 = secondCall2.substring(1) + secondCall2.charAt(0);
console.log(thirdCall1[0] *1 +''+ thirdCall1[1] *1 +''+ thirdCall1[2] *1 +''+ thirdCall1[3] * 3 + " " + thirdCall2[0] *1 +''+ thirdCall2[1] *1 +''+ thirdCall2[2] *1 +''+ thirdCall2[3] * 1);

var fourCall1 = thirdCall1.substring(1) + thirdCall1.charAt(0);
var fourCall2 = thirdCall2.substring(1) + thirdCall2.charAt(0);
console.log("El codigo encriptado es: " + fourCall1[0] *3 +''+ fourCall1[1] *1 +''+ fourCall1[2] *2 +''+ fourCall1[3] *4 + " " + "y " + fourCall2[0] *2 +''+ fourCall2[1] *1 +''+ fourCall2[2] *1 +''+ fourCall2[3] *1);

}

codeScript(3712, 4897);

// c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado
// (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.

function decrypter(codeX1, codeX2){
	var codeNum = codeX1.toString();
	var codeNum2 = codeX2.toString();


var firstCall = codeNum.substring(1) + codeNum.charAt(0);
var firstCall1 = codeNum2.substring(1) + codeNum2.charAt(0);
console.log(firstCall[0] /1 +''+ firstCall[1] /8 +''+ firstCall[2] /4 +''+ firstCall[3] /3 + " " + firstCall1[0] /1 + '' + firstCall1[1] /1 + '' + firstCall1[2] /1 + '' + firstCall1[3] /2 );

var secondCall1 = firstCall.substring(1) + firstCall.charAt(0);
var secondCall2 = firstCall1.substring(1) + firstCall1.charAt(0);
console.log(secondCall1[0] /2 +''+ secondCall1[1] /4 +''+ secondCall1[2] /2 +''+ secondCall1[3] /1 + " " + secondCall2[0] /1 +''+ secondCall2[1] /1 +''+ secondCall2[2] /2 +''+ secondCall2[3] /1);

var thirdCall1 = secondCall1.substring(1) + secondCall1.charAt(0);
var thirdCall2 = secondCall2.substring(1) + secondCall2.charAt(0);
console.log(thirdCall1[0] /1 +''+ thirdCall1[1] /1 +''+ thirdCall1[2] /1 +''+ thirdCall1[3] /3 + " " + thirdCall2[0] /1 +''+ thirdCall2[1] /1 +''+ thirdCall2[2] /1 +''+ thirdCall2[3] /1);

var fourCall1 = thirdCall1.substring(1) + thirdCall1.charAt(0);
var fourCall2 = thirdCall2.substring(1) + thirdCall2.charAt(0);
console.log("El codigo desencriptado es: " + fourCall1[0] /3 +''+ fourCall1[1] /1 +''+ fourCall1[2] /2 +''+ fourCall1[3] /4 + " " + "y " + fourCall2[0] /2 +''+ fourCall2[1] /1 +''+ fourCall2[2] /1 +''+ fourCall2[3] /1);


}

decrypter(9728, 8897);

// c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

function appCodes(){

function codeScript(code1, code2){
	var codeNum = code1.toString();
	var codeNum2 = code2.toString();

var firstCall = codeNum.substring(1) + codeNum.charAt(0);
var firstCall1 = codeNum2.substring(1) + codeNum2.charAt(0);
console.log(firstCall[0]*1 +''+ firstCall[1]*8 +''+ firstCall[2]*4 +''+ firstCall[3]*3 + " " + firstCall1[0] * 1 + '' + firstCall1[1] *1 + '' + firstCall1[2] *1 + '' + firstCall1[3] * 2 );

var secondCall1 = firstCall.substring(1) + firstCall.charAt(0);
var secondCall2 = firstCall1.substring(1) + firstCall1.charAt(0);
console.log(secondCall1[0] *2 +''+ secondCall1[1] *4 +''+ secondCall1[2] *2 +''+ secondCall1[3] *1 + " " + secondCall2[0] *1 +''+ secondCall2[1] *1 +''+ secondCall2[2] *2 +''+ secondCall2[3] *1);

var thirdCall1 = secondCall1.substring(1) + secondCall1.charAt(0);
var thirdCall2 = secondCall2.substring(1) + secondCall2.charAt(0);
console.log(thirdCall1[0] *1 +''+ thirdCall1[1] *1 +''+ thirdCall1[2] *1 +''+ thirdCall1[3] * 3 + " " + thirdCall2[0] *1 +''+ thirdCall2[1] *1 +''+ thirdCall2[2] *1 +''+ thirdCall2[3] * 1);

var fourCall1 = thirdCall1.substring(1) + thirdCall1.charAt(0);
var fourCall2 = thirdCall2.substring(1) + thirdCall2.charAt(0);
console.log("El codigo encriptado es: " + fourCall1[0] *3 +''+ fourCall1[1] *1 +''+ fourCall1[2] *2 +''+ fourCall1[3] *4 + " " + "y " + fourCall2[0] *2 +''+ fourCall2[1] *1 +''+ fourCall2[2] *1 +''+ fourCall2[3] *1);

}

codeScript(3712, 4897);


// --------- desencriptado ------------

function decrypter(codeX1, codeX2){
	var codeNum = codeX1.toString();
	var codeNum2 = codeX2.toString();


var firstCall = codeNum.substring(1) + codeNum.charAt(0);
var firstCall1 = codeNum2.substring(1) + codeNum2.charAt(0);
console.log(firstCall[0] /1 +''+ firstCall[1] /8 +''+ firstCall[2] /4 +''+ firstCall[3] /3 + " " + firstCall1[0] /1 + '' + firstCall1[1] /1 + '' + firstCall1[2] /1 + '' + firstCall1[3] /2 );

var secondCall1 = firstCall.substring(1) + firstCall.charAt(0);
var secondCall2 = firstCall1.substring(1) + firstCall1.charAt(0);
console.log(secondCall1[0] /2 +''+ secondCall1[1] /4 +''+ secondCall1[2] /2 +''+ secondCall1[3] /1 + " " + secondCall2[0] /1 +''+ secondCall2[1] /1 +''+ secondCall2[2] /2 +''+ secondCall2[3] /1);

var thirdCall1 = secondCall1.substring(1) + secondCall1.charAt(0);
var thirdCall2 = secondCall2.substring(1) + secondCall2.charAt(0);
console.log(thirdCall1[0] /1 +''+ thirdCall1[1] /1 +''+ thirdCall1[2] /1 +''+ thirdCall1[3] /3 + " " + thirdCall2[0] /1 +''+ thirdCall2[1] /1 +''+ thirdCall2[2] /1 +''+ thirdCall2[3] /1);

var fourCall1 = thirdCall1.substring(1) + thirdCall1.charAt(0);
var fourCall2 = thirdCall2.substring(1) + thirdCall2.charAt(0);
console.log("El codigo desencriptado es: " + fourCall1[0] /3 +''+ fourCall1[1] /1 +''+ fourCall1[2] /2 +''+ fourCall1[3] /4 + " " + "y " + fourCall2[0] /2 +''+ fourCall2[1] /1 +''+ fourCall2[2] /1 +''+ fourCall2[3] /1);


}

decrypter(9728, 8897);

}

appCodes();

// c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

var dictionary = {
    0: ['A', 'K', 'T'],
    1: ['B', 'L', 'U'],
    2: ['C', 'M', 'V'],
    3: ['D', 'N', 'W'],
    4: ['E', 'Ñ', 'X'],
    5: ['F', 'O', 'Y'],
    6: ['G', 'P', 'Z'],
    7: ['H', 'Q', '.'],
    8: ['I', 'R', ','],
    9: ['J', 'S', ' ']
}
function codeScript(){
var text = dictionary[7][0]+dictionary[8][0]+dictionary[8][2]+dictionary[9][2]+dictionary[9][2]+dictionary[3][2]+dictionary[4][0]
+dictionary[8][2]+dictionary[9][2]+dictionary[3][1]+dictionary[4][0]+dictionary[4][0]+dictionary[3][0]+dictionary[8][2]+dictionary[9][2]+dictionary[7][0]+dictionary[4][0]+dictionary[1][1]+dictionary[6][1]

console.log(text);
}
codeScript();

// d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB,
// la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:
//  SKY
// |-|-|
//  LAB Entonces, uniendo las primeras letras de cada grupo, las segundas y las terceras obtienes SLKAYB.
// Entonces, el programa deberá recibir SKYLAB y retornar SLKAYB

function romanCrip(text){

var part1 = [];
var part2 = [];

part1.push(text);
part2.push(text);

part1 = part1.join("").substring(0,3);
part2 = part2.join("").substring(3,6);

for(var i = 0; i<3; i++){
}
console.log(part1[0] + part2[0] + part1[1] + part2[1] + part1[2] + part2[2]);
}
romanCrip("SKYLAB");

// d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.

//Hint: for decrypt, only catch the pair words like: S L K A Y B , then, you get SKY, the next step is catch the odd words, S L K A Y B,
// group the two groups and you get the original word.

function romanDecrip(text){
var part1 = [];

var part2 = [];

for(var i = 0; i< 5; i=i+2){
part1.push(text[i]);
}
for(var o = 1; o< 6; o=o+2){
part2.push(text[o]);
}
console.log(part1.join("") + part2.join(""));
}
romanDecrip("SLKAYB");

// d3) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB
// (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación)

function romanTabEncripDecrip(){

function romanCrip(text){

var part1 = [];
var part2 = [];

part1.push(text);
part2.push(text);

part1 = part1.join("").substring(0,3);
part2 = part2.join("").substring(3,6);

for(var i = 0; i<3; i++){
}
console.log("La palabra encriptada es: " + part1[0] + part2[0] + part1[1] + part2[1] + part1[2] + part2[2]);
}
romanCrip("SKYLAB");

function romanDecrip(text){
var part1 = [];

var part2 = [];

for(var i = 0; i< 5; i=i+2){
part1.push(text[i]);
}
for(var o = 1; o< 6; o=o+2){
part2.push(text[o]);
}
console.log("La palabra desencriptada es: " + part1.join("") + part2.join(""));
}
romanDecrip("SLKAYB");

}

romanTabEncripDecrip();

// d4) Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.


function romanTabEncripDecrip(){

function romanCrip(text){

var part1 = [];
var part2 = [];

part1.push(text);
part2.push(text);
var numLetter = text.length;
numLetter = parseInt(numLetter);
var halfNumLetter = numLetter /2;
halfNumLetter = parseInt(halfNumLetter);

part1 = part1.join("").substring(0,halfNumLetter);
part2 = part2.join("").substring(halfNumLetter,numLetter);

for(var i = 0; i<numLetter; i++){
}
console.log("La palabra encriptada es: " + part1[0] + part2[0] + part1[1] + part2[1] + part1[2] + part2[2] + part1[3] + part2[3] + part1[4] + part2[4] + part1[5] + part2[5]);
}
romanCrip("SKYLABCODERS");


function romanDecrip(text){
var part1 = [];

var part2 = [];
var numLetter = text.length;
numLetter = parseInt(numLetter);

for(var i = 0; i< numLetter; i=i+2){
part1.push(text[i]);
}

for(var o = 1; o<numLetter; o=o+2){
part2.push(text[o]);

}
console.log("La palabra desencriptada es: " + part1.join("") + part2.join(""));
}
romanDecrip("SCKOYDLEARBS");
}

romanTabEncripDecrip();

// e) Crea un programa al que le introduces un número como parámetro del 0 al 100
// y devuelve el número transformado a alfabeto normal, es decir:

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function sayItWithWords (num){

var n = num;
var digits = (""+n).split("");
var secondNum = digits[1];

if(digits.length === 1){
console.log("El resultado es: " + units[digits]);

}else if(secondNum === 0){
console.log("El resultado es: " + tens[digits[0]]);

}else if(digits.length === 2){
console.log("El resultado es: " + tens[digits[0]] + " " +  units[digits[1]]);

}else if(secondNum !== 0){
console.log("El resultado es: " + teens[digits[1]]);

}else{ console.log("error");}
}

sayItWithWords(88);

// e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido,
// devolver también los números por los que está formado:

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function sayItWithWords (num){

var n = num;
var digits = (""+n).split("");
var secondNum = digits[1];

if(digits.length === 1){
console.log("El resultado es: " + units[digits] + ", " + units[digits] + " / " + num);

}else if(secondNum === "0"){
console.log("El resultado es: " + tens[digits[0]] + ", " +  tens[digits[0]] + " / " + num);

}else if(digits.length === 2){
console.log("El resultado es: " + tens[digits[0]] + " " +  units[digits[1]] + ", " + tens[digits[0]] + " + " + units[digits[1]] + "/ " + digits[0] + digits[1]);

}else if(secondNum !== 0){
console.log("El resultado es: " + teens[digits[1]] + ", " + teens[digits[0]] + "+" + units[digits[1]] + " / " + teens[digits[0]] + units[digits[1]]);

}else{ console.log("error");}
}

sayItWithWords(88);

// e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.

var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
var hundreds = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred']
var thousand = ['', 'one thousand']

function sayItWithWords (num){

var n = num;
var digits = (""+n).split("");
var secondNum = digits[1];

if(digits.length === 1){
console.log("El resultado es: " + units[digits] + ", " + units[digits] + " / " + num);

}else if(secondNum === "0"){
console.log("El resultado es: " + tens[digits[0]] + ", " +  tens[digits[0]] + " / " + num);

}else if(digits.length === 2){
console.log("El resultado es: " + tens[digits[0]] + " " +  units[digits[1]] + ", " + tens[digits[0]] + " + " + units[digits[1]] + "/ " + digits[0] + digits[1]);

}else if(secondNum !== 0){
console.log("El resultado es: " + teens[digits[1]] + ", " + teens[digits[0]] + "+" + units[digits[1]] + " / " + digits[0] + digits[1]);

}else if(digits.length === 3){
console.log("El resultado es: " + hundreds[digits[0]] + ", " + hundreds[digits[0]] + " / " + num);

}else if(digits.length > "100"){
console.log("El resultado es: " + hundreds[digits[0]] + " " + tens[digits[1]] + " " + units[digits[2]] + ", " + hundreds[digits[0]] + "+" + tens[digits[1]] + "+" + units[digits[2]] + " / " + digits[0] + "+" + digits[1] + "+" + digits[2]);

}else if(digits.length === 4){
console.log("El resultado es: " + thousand[digits[0]] + ", " + thousand[digits[0]] + " / " + num);

}else{ console.log("error");}
}

sayItWithWords(88);