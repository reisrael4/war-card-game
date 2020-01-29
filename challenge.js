let mainDeck =[];
let suits=["♠️", "♣️", "♥️", "♦️"];
let values=[2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
let player1=[];
let player2=[];
let cardsInPlay=[];
function createDeck(){
    for (let i=0; i<suits.length; i++){
        for(let j=0; j<values.length; j++){
            let card = {Value: values[j], Suit: suits[i], rank: j};
            mainDeck.push(card);
        }
    }
    return mainDeck;
}
function playRound(){
    cardsInPlay.push(player1[0]);
    player1.shift();
    cardsInPlay.push(player2[0]);
    player2.shift();
    compare();
    }
}
function compare(){
    if(cardsInPlay[0].rank > cardsInPlay[1].rank){
        player1.push(cardsInPlay[0], cardsInPlay[1]);
        cardsInPlay.pop();
        cardsInPlay.pop();
    }
    else if(cardsInPlay[0].rank < cardsInPlay[1].rank){
        player2.push(cardsInPlay[0], cardsInPlay[1]);
        cardsInPlay.pop();
        cardsInPlay.pop();
    }
    else{
        function war(){};
    }
}