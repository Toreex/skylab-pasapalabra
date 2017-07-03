function createCard(){

        var cardOne = [];

        for (var i = 1; i < 100; i++) {
            cardOne.push(i);
        }

        for (var i = 0; i < 83; i++) {
            var positionToDelete = Math.floor(Math.random()*(cardOne.length));
            cardOne.splice(positionToDelete, 1);
            document.getElementById('cartilla').innerHTML = cardOne[0]
            document.getElementById('cartilla1').innerHTML = cardOne[1]
            document.getElementById('cartilla2').innerHTML = cardOne[2]
            document.getElementById('cartilla3').innerHTML = cardOne[3]
            document.getElementById('cartilla4').innerHTML = cardOne[4]
            document.getElementById('cartilla5').innerHTML = cardOne[5]
            document.getElementById('cartilla6').innerHTML = cardOne[6]
            document.getElementById('cartilla7').innerHTML = cardOne[7]
            document.getElementById('cartilla8').innerHTML = cardOne[8]
            document.getElementById('cartilla9').innerHTML = cardOne[9]
            document.getElementById('cartilla10').innerHTML = cardOne[10]
            document.getElementById('cartilla11').innerHTML = cardOne[11]
            document.getElementById('cartilla12').innerHTML = cardOne[12]
            document.getElementById('cartilla13').innerHTML = cardOne[13]
            document.getElementById('cartilla14').innerHTML = cardOne[14]
            
        }
        
       // do{

        
       // for(var i = 0; i < cardOne.length-1; i=i+5){
      //  console.log(cardOne[i] + ' ' +  cardOne[i+1] + ' ' + cardOne[i+2] + ' ' + cardOne[i+3] + ' ' + cardOne[i+4])
//}
        

        var ball = Math.floor(Math.random()*(100));
        document.getElementById('ball').innerHTML = ball
        for(num in cardOne){
            if(ball === cardOne[num]) cardOne[num] = 'X'
            else {}
        }

       // }while(prompt("next round ?") === "yes");
}

        createCard();