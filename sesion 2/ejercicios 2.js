//a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)

function object (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
for (key in avenger){ // por cada clave (name , class, id) escribelo en console.log.
	console.log(key)
}
}

object();

// b) Ahora, crea una función que liste solo los valores de las propiedades.


function object2 (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
for (key in avenger){ // por cada clave (name , class, id) escribelo en console.log.
	console.log(avenger[key]);
}
}

object2();

// c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.


function object3 (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.class = "XI";
// por cada clave (name , class, id) escribelo en console.log.
	console.log(avenger);

}

object3();

// d) Ahora, elimina la propiedad ID y asegura los cambios.



function object4 (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
delete avenger.id;
// por cada clave (name , class, id) escribelo en console.log.
	console.log(avenger);

}

object4();

// e) Añade una nueva propiedad, por ejemplo city y dale un valor.


function object5 (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.City = "Barcelona";
// por cada clave (name , class, id) escribelo en console.log.
	console.log(avenger);

}

object5();

// e1) Asegura los cambios solo imprimiendo esa nueva propiedad.


function object6 (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.city = "Barcelona";
// por cada clave (name , class, id) escribelo en console.log.
	console.log(avenger.city);

}

object6();

// f) Lista el numero de propiedades que contiene el objeto.


function objectList (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};
avenger.city = "Barcelona";
// por cada clave (name , class, id) escribelo en console.log.
var acc = 0;
for(  key in avenger){
acc++
}
	console.log(acc);


}

objectList();

// g) Cambia la propiedad name por fullName.


function objectName (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
    
};
delete avenger.name;
avenger.fullName = "Tony Stark";

	console.log(avenger);


}

objectName();
// Los objetos no se pueden modificar.


// g1) Asegura los cambios.


function objectfullName (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
    
};
delete avenger.name;
avenger.fullName = "Tony Stark";

	console.log(avenger.fullName);


}

objectfullName();

// h) Lista todas las propiedades del objeto a través de un console.log()



function objectListProp (){ 
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
    
};
avenger.name = "Mi nombre es " + avenger.name;
avenger.class = "My class es " + avenger.class;
avenger.id = "My id es " + avenger.id;


console.log(avenger);

	}
	objectListProp();

	// h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...


function objectNew (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
    
};
avenger.country = "Spain";
avenger.studies = "coder";

console.log(avenger);

	}
	objectNew();

	// h2) Asegura los cambios volviendo a listar los valores del objeto


function objectNewList (){
	var avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
    
};
avenger.country = "Spain";
avenger.studies = "coder";

for( key in avenger){
console.log(avenger[key]);
}

	}
	objectNewList();

	/* i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros,
	 creando una instancia del objeto con las propiedades de nuestro objeto creado.
	 (Échale un ojo a la referencia de abajo.)*/

	 function avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new avenger ("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10)
console.log(tonyStark)

avenger();

// j) Crea otro objeto y imprime sus propiedades por pantalla.


	 function avengerNew(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var DidacTey = new avenger ("Didac Tey", "XX", "BCN", "coder", "ESO", 10)
console.log(DidacTey)

avengerNew();

// k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia. . Example of property:



	 function avengerDes(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
     this.description = function(){
            console.log(this.fullName + ", " + this.classRoom + ", " + this.city + ", " + this.job + ", " + this.studies + ", " + this.markAv)
}
}
var DidacTey = new avengerDes ("Didac Tey", "XX", "BCN", "coder", "ESO", 10);
DidacTey.description();


avengerDes();

// l) Ahora, crea una función que solo liste los nombres de los objetos instanciados


	 function avengerOnlyName(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
     this.description = function(){
     	    	
        }

console.log(fullName);
}
var tonyStark = new avengerOnlyName ("Tony Stark", "XI", "NYC", "ingeneer", "MIT", 10);
tonyStark.description();

var hulk = new avengerOnlyName ("Hulk", "IX", "NYC", "scientific", "sciense", 10);
hulk.description();

var thor = new avengerOnlyName ("Thor", "XXI", "Asgard", "God of Thunder", "God", 10);
thor.description();


/* m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad,
 crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.*/


function avengerCoincidence(fullName, classRoom, city, job, studies, markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
    //Creamos array vacia.
    var avengersArray = []

var tonyStark = new avengerCoincidence ("Tony Stark", "XI", "NYC", "ingeneer", "MIT", 10);
avengersArray.push(tonyStark); //se introduce en el array vacia.

var hulk = new avengerCoincidence ("Hulk", "IX", "NYC", "scientific", "sciense", 9);
avengersArray.push(hulk); // se introduce en el array vacia.

var thor = new avengerCoincidence ("Thor", "XXI", "Asgard", "Dod of Thunder", "God", 10);
avengersArray.push(thor); // se introduce en el array vacia.

function listAvengers(){
    var numberOfCoin = 0
    avengersArray.forEach(function(key){
        if(key.city === "NYC") numberOfCoin++

    })
    return numberOfCoin + " Avenger are from NYC"
}

listAvengers();

// n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media de todas las notas.

function avengersAndMe (fullName, classRoom, city, job, studies, markAv){

this.fullName = fullName;
this.classRoom = classRoom;
this.city = city;
this.job = job;
this.studies = studies;
this.markAv = markAv;
}

// se crea array vacia.
var avengersArray = []

var tonyStark = new avengerCoincidence ("Tony Stark", "XI", "NYC", "ingeneer", "MIT", 10);
avengersArray.push(tonyStark); //se introduce en el array vacia.

var hulk = new avengerCoincidence ("Hulk", "IX", "NYC", "scientific", "sciense", 9);
avengersArray.push(hulk); // se introduce en el array vacia.

var thor = new avengerCoincidence ("Thor", "XXI", "Asgard", "Dod of Thunder", "God", 10);
avengersArray.push(thor); // se introduce en el array vacia.

var toreex = new avengerCoincidence ("Didac", "XI", "Barcelona", "Comercial", "Eso", 8);
avengersArray.push(toreex); // se introduce en el array vacia.

//recorremos array y filtramos
function listAvengers (){

var addNumber = []

    // RECORREMOS LA ARRAY DE OBJETOS
    avengersArray.forEach(function(key){

         //AÑADIMOS LAS NOTAS (markAv) A UNA NUEVA ARRAY LLAMADA addNumber
    return addNumber.push(key.markAv)
    })


/* CREAMOS UNA NUEVA VARIABLE QUE CONTENDRA LA SUMA DE TODAS LAS NOTAS,
   Y A TRAVÉS DE REDUCE SUMAMOS DE IZQUIERDA A DERECHA TODOS LOS ELEMENTOS DE addNumber*/
var numbersMarkAv = addNumber.reduce(key, 0);
function key(a, b) {
    return a + b;
}


/* PARA HACER LA MEDIA CREAMOS UNA NUEVA VARIABLE QUE LA CONTENDRA Y QUE DIVIDIRA.
EL TOTAL DE NUMEROS DE LAS NOTAS DIVIDIDO POR EL TOTAL DE NOTAS DE CADA AVENGER */
var result = numbersMarkAv/addNumber.length;

console.log(result);
}

listAvengers();

/* ñ y Ñ1) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id...),
 es decir, de dos en dos, compare sus markAv y que solo muestre el mayor.*/


var avengersId = [
{id: 00, fullName: "Tony Stark", classRoom: "XI", city: "NYC", job: "ingeneer", studies: "Mit", markAv: 10},
{id: 01, fullName: "Hulk", classRoom: "IX", city: "NYC", job: "scientific", studies: "sciense", markAv: 9},
{id: 02, fullName: "Thor", classRoom: "XXI", city: "Asgard", job: "Don of Thunder", studies: "God", markAv: 10},
{id: 03, fullName: "Steven Grant", classRoom: "V", city: "NYC", job: "soldier", studies: "fine arts", markAv: 9},
]


function avengers (id, fullName, classRoom, city, job, studies, markAv){

this.id = id;
this.fullName = fullName;
this.classRoom = classRoom;
this.city = city;
this.job = job;
this.studies = studies;
this.markAv = markAv;
this.description = function(){
       this.id, this.fullName, this.classRoom, this.city, this.job, this.studies, this.markAv
}

}
var tonyStark = new avengers (00, "Tony Stark", "XI", "NYC", "ingeneer", "MIT", 10);
tonyStark.description();

var hulk = new avengers (01, "Hulk", "IX", "NYC", "scientific", "sciense", 9);
hulk.description();

var thor = new avengers (02, "Thor", "XXI", "Asgard", "Dod of Thunder", "God", 10);
thor.description();

var capitanAmerica = new avengers (03, "Steven Grant", "V", "NYC", "soldier", "fine arts", 9);
capitanAmerica.description();

function couplesAvengers(min, max) {
do{
var result1 = Math.floor(Math.random() * (max - min)) + min;
var result2 = Math.floor(Math.random() * (max - min)) + min;
}while(result1 === result2);
// do{ } while le dice a la funcion en este caso, que corra hasta encontrar dos numeros diferentes.

var compareRandomPair = [];

if(result1 === 0){
   compareRandomPair.push(tonyStark.fullName, tonyStark.markAv);
}else if (result1 === 1){
   compareRandomPair.push(hulk.fullName, hulk.markAv);
 }else if (result1 === 2){
       compareRandomPair.push(thor.fullName, thor.markAv);
   }else if (result1 === 3){
       compareRandomPair.push(capitanAmerica.fullName, capitanAmerica.markAv);
   }

if(result2 === 0){
   compareRandomPair.push(tonyStark.fullName, tonyStark.markAv);
}else if (result2 === 1){
   compareRandomPair.push(hulk.fullName, hulk.markAv);
 }else if (result2 === 2){
       compareRandomPair.push(thor.fullName, thor.markAv);
   }else if (result2 === 3){
       compareRandomPair.push(capitanAmerica.fullName, capitanAmerica.markAv);
   }

if(compareRandomPair[1] > compareRandomPair[3]){
    console.log(compareRandomPair[0] + " " + compareRandomPair[1] + " is better than " + compareRandomPair[2] + " " + compareRandomPair[3]);
}else if(compareRandomPair[1] < compareRandomPair[3]){
    console.log(compareRandomPair[2] + " " + compareRandomPair[3] + " is better than " + compareRandomPair[0] + " " + compareRandomPair[1]);
}else if(compareRandomPair[1] === compareRandomPair[3]){
    console.log(compareRandomPair[0] + " " + compareRandomPair[1] + " is just as inteligent as " + compareRandomPair[2] + " " + compareRandomPair[3]);
}

}

couplesAvengers(0, 4);



