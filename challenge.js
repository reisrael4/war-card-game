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
function shuffle(){
    //Fisher-Yates Shuffle
    for(let i=mainDeck.length - 1; i > 0; i-=1){ 
        let j = Math.floor(Math.random() * (i + 1));
        let temp = mainDeck[i];
        mainDeck[i] = mainDeck[j];
        mainDeck[j] = temp
    }  
    return mainDeck;
}
function deal(){
    shuffle();
        for(i=0; i<mainDeck.length; i++){
            if(i % 2 === 0){
            player1.push(mainDeck[i])
        } else{
            player2.push(mainDeck[i])
        }
    }
    return [player1, player2]
}
function compare(){
    if(cardsInPlay1[0].rank > cardsInPlay2[0].rank){
        player1.push(cardsInPlay1[0], cardsInPlay2[0]);
        cardsInPlay1.pop();
        cardsInPlay2.pop();
        console.log(`Player 1 wins this round! Player 1 has ${player1.length} cards!`)
    }
    else if(cardsInPlay1[0].rank < cardsInPlay2[0].rank){
        player2.push(cardsInPlay1[0], cardsInPlay2[0]);
        cardsInPlay1.pop();
        cardsInPlay2.pop();
        console.log(`Player 2 wins this round! Player 2 has ${player2.length} cards!`)
    }
    else{
        war();
        console.log("I declare war!")
    }
    
    //function end round(){}
}
function war(){
    
};

function flipCard(){
    cardsInPlay1.push(player1[0]);
    player1.shift();
    cardsInPlay2.push(player2[0]);
    player2.shift();
    }
function playRound(){
    flipCard();
    compare();
    // return //something
}