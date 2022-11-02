// program to shuffle the deck of cards

// declare card elements
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = [
  "ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "jack",
  "queen",
  "king",
];

// empty array to contain cards
let deck = [];

// create a deck of cards
for (let i = 0; i < suits.length; i++) {
    for (let x = 0; x < values.length; x++) {
 
        var card = {Point: x<10 ? x+1 : 10, Value: values[x], Suit: suits[i], File: values[x]+"_of_"+suits[i]+".png" };
         
        deck.push(card);
    }
}

// shuffle the cards
for (let i = deck.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    let temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
}



console.log('The first five cards are:');

var TotalPoint = 0;
var count=0;

var player1 = [], player2= [];

player1.push(deck.pop());
player1.push(deck.pop());
player1.forEach(function(card){
    var newcard = document.createElement("img");
     newcard.width = 250;
     newcard.src = "PNG-cards/"+card.File;
     document.getElementById("Cards1").appendChild(newcard)
     TotalPoint += card.Point;
})


document.getElementById("Point").innerHTML=TotalPoint;

function addcard1(){
        var newcard = document.createElement("img");
        newcard.width = 250;
        player1.push(deck.pop());
        newcard.src = "PNG-cards/"+player1[player1.length-1].File;
        TotalPoint += player1[player1.length-1].Point;
        document.getElementById("Cards1").appendChild(newcard)
        document.getElementById("Point1").innerHTML=TotalPoint;
        count++;
}