
function nameMy(){
var name = prompt();
	var myName = "Hola " + name + ". " + "Bienvenido a SKYLAB AIRLINES";
document.getElementById('name').innerHTML = myName
	// Pregunta y da la bienvenida.
}

var flights = [
{id: 00, to: "New York", from: "Barcelona", cost: 700,scale: false},
{id: 01, to: "Los Angeles", from: "Madrid", cost: 1100,scale: true},
{id: 02, to: "Paris", from: "Barcelona", cost: 210,scale: false},
{id: 03, to: "Roma", from: "Barcelona", cost: 150,scale: false},
{id: 04, to: "London", from: "Madrid", cost: 200,scale: false},
{id: 05, to: "Madrid", from: "Barcelona", cost: 90,scale: false},
{id: 06, to: "Tokyo", from: "Madrid", cost: 1500,scale: true},
{id: 07, to: "Shangai", from: "Barcelona", cost: 800,scale: true},
{id: 08, to: "Sydney", from: "Barcelona", cost: 150,scale: true},
{id: 09, to: "Tel-Aviv", from: "Madrid", cost: 150,scale: false}
]

function myFlights(){
var flights = []
	function viewFlights (id, to, from, cost, scale){

	this.id = id;
	this.to = to;
	this.from = from;
	this.cost = cost;
	this.scale = scale;
	this.description = function(){
		flights.push("El vuelo : " + this.id +  ", Con origen en : " + this.to + ", Y destino a : " + this.from + ", Tiene un coste de : " + this.cost + ", Escala? : " + this.scale + "<br>")
	}

	}

var flight00 = new viewFlights (00, "New York", "Barcelona", 700, false);
flight00.description();

var flight01 = new viewFlights (01, "Los Angeles", "Madrid", 1100, true);
flight01.description();

var flight02 = new viewFlights (02, "Paris", "Barcelona", 210, false);
flight02.description();

var flight03 = new viewFlights (03, "Roma", "Barcelona", 150, false);
flight03.description();

var flight04 = new viewFlights (04, "London", "Madrid", 200, false);
flight04.description();

var flight05 = new viewFlights (05, "Madrid", "Barcelona", 90, false);
flight05.description();

var flight06 = new viewFlights (06, "Tokyo", "Madrid", 1500, true);
flight06.description();

var flight07 = new viewFlights (07, "Shangai", "Barcelona", 800, true);
flight07.description();

var flight08 = new viewFlights (08, "Sydney", "Barcelona", 150, true);
flight08.description();

var flight09 = new viewFlights (09, "Tel-Aviv", "Madrid", 150, false);
flight09.description();

document.getElementById('flight').innerHTML = flights.join("");
}

function costTotal(){
///Hace el coste medio de los vuelos.
var acc = 0
	
	flights.forEach(function(key){
		acc += key.cost
		 	
	})
		 	
document.getElementById('cost').innerHTML = "La media de sus costes de vuelo son: " + acc/flights.length + "€";
}

function scaleFly(){
//filtra los objetos del array(escalas) que sea true
function filterScale(obj){
	return obj.scale === true
}

//'scaleTrue' es el nuevo array de objetos filtrados por escalas True 
var scaleTrue = flights.filter(filterScale)

//recorre el array de objetos filtrado imprimiendo el id de vuelo
scaleTrue.forEach(function(key){
document.getElementById('scaleFlight').innerHTML = "Los numeros de vuelo con escalas son: " + key.id
	
})

}


function lastFiveFlyAndDestiny(){
// funcion para ver los ultimos 5 vuelos ( destinos)
function lastFlights (obj){

return obj.to
}

var last5Flights = []
last5Flights.push(flights[05], flights[06], flights[07], flights[08], flights[09]);

var toFlights = last5Flights.filter(lastFlights)
document.getElementById('lastFlight').innerHTML = toFlights;
}

function last5Destiny(){
function lastFlights (obj){

return obj.to
}

var last5Flights = []
last5Flights.push(flights[05], flights[06], flights[07], flights[08], flights[09]);

var toFlights = last5Flights.filter(lastFlights)



function printDestiny() {
	
    // RECORREMOS LA ARRAY DE OBJETOS
    toFlights.forEach(function(key){
    	var lastFive = key.to;
    	document.getElementById('lastFiveTo').innerHTML = "Los ultimos 5 destinos son: " + lastFive;
    })
};

printDestiny();
}




