// SkyLab Airlines.

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


	var name = prompt("Digame su nombre de usuario. ");
	console.log("Hola " + name + "\n" + "Bienvenido a SKYLAB AIRLINES");
// Pregunta y da la bienvenida.

function viewFlights (id, to, from, cost, scale){

	

	this.id = id;
	this.to = to;
	this.from = from;
	this.cost = cost;
	this.scale = scale;
	this.description = function(){
		console.log("El vuelo : " + this.id +  ", Con origen en : " + this.to + ", Y destino a : " + this.from + ", Tiene un coste de : " + this.cost + ", Escala? : " + this.scale)
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


///Hace el coste medio de los vuelos.
var acc = 0
	
	flights.forEach(function(key){
		acc += key.cost
		 	
	})

console.log('Los costes medios de los vuelos son => ' + acc/flights.length);




 //filtra los objetos del array(escalas) que sea true
function filterScale(obj){
	return obj.scale === true
}

//'scaleTrue' es el nuevo array de objetos filtrados por escalas True 
var scaleTrue = flights.filter(filterScale)

//recorre el array de objetos filtrado imprimiendo el id de vuelo
scaleTrue.forEach(function(key){
	console.log("Los numeros de vuelo con escalas son: " + key.id);
})

// funcion para ver los ultimos 5 vuelos ( destinos)
function lastFlights (obj){

return obj.to
}

var last5Flights = []
last5Flights.push(flights[05], flights[06], flights[07], flights[08], flights[09]);

var toFlights = last5Flights.filter(lastFlights)
console.log(toFlights);


function printDestiny() {
	console.log("Los ultimos 5 destinos son : ");
    // RECORREMOS LA ARRAY DE OBJETOS
    toFlights.forEach(function(key){
    	console.log(key.to);
    })
};

printDestiny();


    // ADMIN o USER ! si es admin preguntara una serie de opciones , si es user preguntara otras.

    function adminUser(){
    	var question = prompt("Es admin o user ?");
    	if(question === "admin".toLowerCase()){
    		console.log("Bienvenido Admin");

    function adminRemove (){
    	var questRemove = prompt("Quieres borrar un vuelo ? Si/No");
    	if(questRemove === "si".toLowerCase()){

var removeByAttr = function(flights, attr, value){
			    var i = flights.length;
			    while(i--){
			       if( flights[i] 
			           && flights[i].hasOwnProperty(attr) 
			           && (arguments.length > 2 && flights[i][attr] === value ) ){ 

			           flights.splice(i,1);

			       }
			    }
			     for (var i = 0; i < flights.length; i++) {
				    	console.log(flights[i]);
				    }
			    
			}
			var numberFly = prompt("Escribe el numero de vuelo del 1 a 10 que quieras borrar","");
			removeByAttr(flights, 'id', parseInt(numberFly)); 

}else {// no se borra ningun vuelo.
	console.log("Ningun cambio sera efectuado");
}	

	}

adminRemove();


    	} else {

    		console.log("Bienvenido User");
var questCost = prompt("Quieres buscar vuelos por precio? Si/No");

// Deveria poner un if() con la respuesta si , 
// Tengo que afinar la aplicacion searchFlyPrice , no funciona.
    		function searchFlyPrice (){

    		var	filtersArray = [cost];

var filtered = flights.filter(function(element) {
   var cats = element.category.split(' ');
   
    return cats.filter(function(cat) {
       return filtersArray.indexOf(cat) > -1;
    }).length === filtersArray.length;
});
	
console.log(filtered);

    	}
    }
    //deveria poner un else con console.log("Gracias por su visita") pero no me funciona.. me da error.
}
    adminUser();


