// Bingo Games.

function userName (){
    var name = prompt("Tell me your name?");
    console.log("Hello " + name);
}
userName();
function bingoGame(){


 var round1 = Math.floor(Math.random() * (100 - 1)) + 1;
 console.log(round1);


    var randomNum1 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum1 === round1){
       return randomNum1 = "X";
    }else{ 
    }

    var randomNum2 = Math.floor(Math.random() * (100 - 1)) + 1;
if(randomNum2 === round1){
        randomNum2 = "X";
    }else{ 
    }

    var randomNum3 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum3 === round1){
        randomNum3 = "X";
    }else{ 
    }

    var randomNum4 = Math.floor(Math.random() * (100 - 1)) + 1;  
    if(randomNum4 === round1){
        randomNum4 = "X";
    }else{ 
    }

    var randomNum5 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum5 === round1){
        randomNum5 = "X";
    }else{ 
    }

    var randomNum6 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum6 === round1){
        randomNum6 = "X";
    }else{ 
    }

    var randomNum7 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum7 === round1){
        randomNum7 = "X";
    }else{ 
    }

    var randomNum8 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum8 === round1){
        randomNum8 = "X";
    }else{ 
    }

    var randomNum9 = Math.floor(Math.random() * (100 - 1)) + 1;  
    if(randomNum9 === round1){
        randomNum9 = "X";
    }else{ 
    }

    var randomNum10 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum10 === round1){
        randomNum10 = "X";
    }else{ 
    }

    var randomNum11 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum11 === round1){
        randomNum11 = "X";
    }else{ 
    }

    var randomNum12 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum12 === round1){
        randomNum12 = "X";
    }else{ 
    }

    var randomNum13 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum13 === round1){
        randomNum13 = "X";
    }else{ 
    }

    var randomNum14 = Math.floor(Math.random() * (100 - 1)) + 1;  
    if(randomNum14 === round1){
        randomNum14 = "X";
    }else{ 
    }

    var randomNum15 = Math.floor(Math.random() * (100 - 1)) + 1;
    if(randomNum15 === round1){
        randomNum15 = "X";
    }else{ 
    }


function lineObject (number1, number2, number3, number4, number5){
    this.number1 = number1;
    this.number2 = number2;
    this.number3 = number3;
    this.number4 = number4;
    this.number5 = number5;
    this.description = function(){
        console.log(this.number1, this.number2, this.number3, this.number4, this.number5)
    }
}
var line1 = new lineObject (randomNum1, randomNum2, randomNum3, randomNum4, randomNum5);
line1.description();

var line2 = new lineObject (randomNum6, randomNum7, randomNum8, randomNum9, randomNum10);
line2.description();

var line3 = new lineObject (randomNum11, randomNum12, randomNum13, randomNum14, randomNum15);
line3.description();




function goTurn(){
    var repeat = prompt("Would you like to go to the next round? ");
    repeat.toLowerCase();
    if (repeat === "yes"){
    bingoGame();
}else{
    console.log("I see you soon");
}
}

goTurn();

}
bingoGame();


//Bingo 



function createCard(){

        var cardOne = [];

        for (var i = 1; i < 100; i++) {
            cardOne.push(i);
        }

        for (var i = 0; i < 83; i++) {
            var positionToDelete = Math.floor(Math.random()*(cardOne.length));
            cardOne.splice(positionToDelete, 1);
        }
        
        do{

        
        for(var i = 0; i < cardOne.length-1; i=i+5){
        console.log(cardOne[i] + ' ' +  cardOne[i+1] + ' ' + cardOne[i+2] + ' ' + cardOne[i+3] + ' ' + cardOne[i+4])
}
        if(cardOne[i] + ' ' +  cardOne[i+1] + ' ' + cardOne[i+2] + ' ' + cardOne[i+3] + ' ' + cardOne[i+4] === "X"){
            console.log("LINE");
    } else {}

        var ball = Math.floor(Math.random()*(100));
        console.log(ball)
        for(num in cardOne){
            if(ball === cardOne[num]) cardOne[num] = 'X'
            else {}
        }

        }while(prompt("next round ?") === "yes");
}

        createCard();
        // Esta version FUNCIONA ! LINE no funciona !