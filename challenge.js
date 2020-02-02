// let mainDeck =[];
let suits=["♠️", "♣️", "♥️", "♦️"];
let values=[2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
let player1=[];
let player2=[];
let cardsInPlay1=[];
let cardsInPlay2=[];

let button = document.getElementsByClassName("play-game");
addEventListener("click", playGame);

class Card{
    constructor(suit, rank, score){
        this.suit = suit
        this.rank = rank
        this.score = score
    }
};
class Deck{
    constructor(){
        this.cards = [];
    }
    addCards(){
       let suits = ['♥️', '♦️', '♣️', '♠️'];
       let ranks = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
       let scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
       for(let i=0; i<suits.length; i++){
           for(let j=0; j<ranks.length; j++){
               this.cards.push(new Card(suits[i], ranks[j], scores[j]))
           }
       }
   }
   shuffle(){
    //Fisher-Yates Shuffle
    for(let i=this.cards.length - 1; i > 0; i-=1){ 
        let j = Math.floor(Math.random() * (i + 1));
        let temp = this.cards[i];
        this.cards[i] = this.cards[j];
        this.cards[j] = temp
    }  
    return this.cards;
}
    deal(){
        for(let i=0; i<this.cards.length; i++){
            if(i % 2 === 0){
            player1.push(this.cards[i])
        } else{
            player2.push(this.cards[i])
        }
    }
}
};

const mainDeck = new Deck()
mainDeck.addCards();
mainDeck.shuffle();
mainDeck.deal();

// function createDeck(){
//     for (let i=0; i<suits.length; i++){
//         for(let j=0; j<values.length; j++){
//             let card = {Value: values[j], Suit: suits[i], rank: j};
//             mainDeck.push(card);
//         }
//     }
//     return mainDeck;
// }
// function playGame(){
    // deal();
//     playRound();
// }
// function shuffle(){
//     //Fisher-Yates Shuffle
//     for(let i=mainDeck.length - 1; i > 0; i-=1){ 
//         let j = Math.floor(Math.random() * (i + 1));
//         let temp = mainDeck[i];
//         mainDeck[i] = mainDeck[j];
//         mainDeck[j] = temp
//     }  
//     return mainDeck;
// }
// function deal(){
//     // shuffle();
//         for(i=0; i<mainDeck.length; i++){
//             if(i % 2 === 0){
//             player1.push(mainDeck[i])
//         } else{
//             player2.push(mainDeck[i])
//         }
//     }
//     return [player1, player2]
// }
function compare(){
    if(cardsInPlay1[0].score > cardsInPlay2[0].score){
        player1.push(cardsInPlay1[0], cardsInPlay2[0]);
        cardsInPlay1 = [];
        cardsInPlay2 = [];
        console.log(`Player 1 wins this round! Player 1 has ${player1.length} cards! Player 2 has ${player2.length} cards!`)
        //Player 1 flipped the ${cardsInPlay1[0].value} of ${cardsInPlay1[0].suit}. Player 2 flipped the ${cardsInPlay2[0].value} of ${cardsInPlay2[0].suit}. 
    }
    else if(cardsInPlay1[0].score < cardsInPlay2[0].score){
        player2.push(cardsInPlay2[0], cardsInPlay1[0]);
        cardsInPlay1 = [];
        cardsInPlay2 = [];
        console.log(`Player 2 wins this round! Player 2 has ${player2.length} cards! Player 1 has ${player1.length} cards!`)
    }
    else{
        war();
        console.log("I declare war!")
    }
}
function compareWar(){
    if(cardsInPlay1[0].score > cardsInPlay2[0].score){
        player1.push(...cardsInPlay1, ...cardsInPlay2);
        cardsInPlay1 = [];
        cardsInPlay2 = [];
        console.log(`Player 1 wins this war! Player 1 has ${player1.length} cards! Player 2 has ${player2.length} cards!`)
    }
    else if(cardsInPlay1[0].score < cardsInPlay2[0].score){
        player2.push(...cardsInPlay2, ...cardsInPlay1);
        cardsInPlay1 = [];
        cardsInPlay2 = [];
        console.log(`Player 2 wins this war! Player 2 has ${player2.length} cards! Player 1 has ${player1.length} cards!`)
    }
    else{
        war();
        console.log("I declare war!")
    }
}
function war(){
    cardsInPlay1.unshift(...player1.splice(0,4));
    cardsInPlay2.unshift(...player2.splice(0,4));
    compareWar();
};

function flipCard(){
    cardsInPlay1.push(player1[0]);
    player1.shift();
    cardsInPlay2.push(player2[0]);
    player2.shift();
    }
function playGame(){
    flipCard();
    console.log(`Player 1 flipped the ${cardsInPlay1[0].rank} of ${cardsInPlay1[0].suit}. Player 2 flipped the ${cardsInPlay2[0].rank} of ${cardsInPlay2[0].suit}.`);
    compare();
    checkForWinner();
}
function checkForWinner(){
    if(player1.length===52){
        player1 = [];
        mainDeck.shuffle();
        mainDeck.deal();
        console.log("Congratulations Player 1!")
    } else if(player2.length===52){
        player2 = [];
        mainDeck.shuffle();
        mainDeck.deal();
        console.log("Congratulations Player 2!")
    } else{ 
       playGame(); 
    }
}
// createDeck();

playGame();