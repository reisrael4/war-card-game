let mainDeck =[];
let suits=["♠️", "♣️", "♥️", "♦️"];
let values=[2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
let player1=[];
let player2=[];
function createDeck(){
    for (let i=0; i<suits.length; i++){
        for(let j=0; j<values.length; j++){
            let card = {Value: values[j], Suit: suits[i], rank: j};
            mainDeck.push(card);
        }
    }
    return mainDeck;
}