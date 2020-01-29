let deck =[];
let suits=["♠️", "♣️", "♥️", "♦️"];
let values=[2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
function getDeck(){
    for (let i=0; i<suits.length; i++){
        for(let j=0; j<value.length; j++){
            let card = {Value: values[j], Suit: suits[i]};
            deck.push(card);
        }
    }
    return deck;
}