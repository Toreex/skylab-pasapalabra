// PASAPALABRA !!

function pasapalabra(){
var alphabet = [
 	{ letter: "a", answer: "abducir", status: 0, question: ("CON LA A. Dicho de una supuesta criatura extraterrestre: Apoderarse de alguien") },
    { letter: "b", answer: "bingo", status: 0, question: ("CON LA B. Juego que ha sacado de quicio a todos los 'Skylabers' en las sesiones de precurso") },
    { letter: "c", answer: "churumbel", status: 0, question: ("CON LA C. Niño, crío, bebé") }
]

var name = prompt("What's your name ?");
	console.log("Hello " + name);

	var errors = 0
	var corrects = 0
	var passP = 0
	

	while(passP < alphabet.length){
		if (errors + corrects != alphabet.length) {	
		alphabet.forEach(function(key){
				if (key.status = 0) {
					var userAnswer = prompt(key.question).toLowerCase();
					if (userAnswer === key.answer ) {
						corrects++
						passP++
						key.status = 1
						console.log("Bien, acertaste")
					}else if(userAnswer === "pasapalabra"){
						
						console.log("Pasamos !")

					}else{
						errors++ 
						passP++
						key.status = 2
						console.log("fallaste")
					}
				
				} else{console.log('')}
			})
		}
}
console.log("Las preguntas acertadas son " + corrects + " y las preguntas erroneas son " + errors);
}

pasapalabra();
