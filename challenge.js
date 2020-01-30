let mainDeck =[];
let suits=["♠️", "♣️", "♥️", "♦️"];
let values=[2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
let player1=[];
let player2=[];
let cardsInPlay1=[];
let cardsInPlay2=[];

function createDeck(){
    for (let i=0; i<suits.length; i++){
        for(let j=0; j<values.length; j++){
            let card = {Value: values[j], Suit: suits[i], rank: j};
            mainDeck.push(card);
        }
    }
    return mainDeck;
}
function deal(){
    shuffle(){                    //Fisher-Yates Shuffle
        let i = 0;
        let j = 0;
        let temp = null;
        for(i=mainDeck.length - 1; i > 0; i-=1){
            j = Math.floor(Math.random() * (i + 1));
            temp = mainDeck[i];
            mainDeck[i] = mainDeck[j];
            mainDeck[j] = temp
        }
    }
    for(i=0; i<mainDeck.length; i++){
        if(i % 2 === 0){
            player1.shift(mainDeck[i])
        }
        else{
            player2.shift(mainDeck[i])
        }
    }
    
}
function compare(){
    if(cardsInPlay1[0].rank > cardsInPlay2[0].rank){
        player1.push(cardsInPlay1[0], cardsInPlay2[0]);
        cardsInPlay1.pop();
        cardsInPlay2.pop();
    }
    else if(cardsInPlay1[0].rank < cardsInPlay2[0].rank){
        player2.push(cardsInPlay1[0], cardsInPlay2[0]);
        cardsInPlay1.pop();
        cardsInPlay2.pop();
    }
    else{
        war();
    }
    //function end round(){}
}
function war(){
    // cardsInPlay1.forEach()
};

function flipCard(){
    cardsInPlay1.push(player1[0]);
    player1.shift();
    cardsInPlay1.push(player2[0]);
    player2.shift();
    }
function playRound(){
    flipCard();
    compare();
}