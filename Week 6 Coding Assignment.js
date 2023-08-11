// Hunter Peay | Week 6 Coding Assignment | FE May 2023



//Instructions
// Deal 26 Cards to each Player from a Deck of 52 cards.
// Iterate through the turns where each Player plays a Card.
// The Player who played the higher card is awarded a point.
//     Ties result in zero points for both Players.
// After all cards have been played, display the score and declare the winner.
// Write a Unit Test using Mocha and Chai for at least one of the functions you write.


const suits = ['♥', '♦', '♠', '♣']; //Declare card suits
const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']; //Declare card ranks
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] //Declare card values

class Deck { //Class that creates the deck and shuffles the deck
    constructor (cards = originalDeck()) {
        this.cards = cards;
    }
    shuffle() { //Method that iterates through cards and shuffles them.
        for (let i = this.cards.length - 1; i > 0; i--) { //For loop iterates through the lengths of the cards.
            const newDeck = Math.floor(Math.random() * (i + 1)); //Variable that declares new deck. Uses .floor and .random to shuffle cards.
            const oldDeck = this.cards[newDeck]; 
            this.cards[newDeck] = this.cards[i];
            this.cards[i] = oldDeck;
        }
    }
}


class Card { //Class that declares object properties for cards in a deck.
    constructor(suits, ranks, values) {
        this.suits = suits;
        this.ranks = ranks;
        this.values = values;
    }
}

function originalDeck() { //Function that creates an original deck.
    return suits.flatMap(suits => { //.flatMap creates a single array
        return ranks.map((ranks, index) => {
            return new Card(suits, ranks, values[index]) //Returns cards with the suits, ranks, and values declared.
        })
    })
}


class StartGame { //Class that starts the game.
    constructor() {
        this.deck1 = null; //Declares an empty object value for player 1.
        this.deck2 = null; //Declares an empty object value for player 2.
        this.currentRound = "Round 1: " + 0;

    }
    dealDeck() {//Method that deals the deck.
        let deck = new Deck(); //Variable that declares a new Deck.
            deck.shuffle(); //calls the shuffle method to shuffle the cards.
    
            const deckSplit = deck.cards.length / 2; //Variable that identifies the deck midpoint.
            this.deck1 = new Deck(deck.cards.slice(0, deckSplit)); //Creates a Deck for player 1, uses .slice to deal cards 1-26.
            this.deck2 = new Deck(deck.cards.slice(deckSplit, deck.cards.length)) //Creates a Deck for player 2, uses .slice to deal cards 27-52.
            console.log(this.deck1);
            console.log(this.deck2);
        }
    
    gameInitialization() { //Initialize the game
        let player1Points = 0; //Sets player 1 beginning points to 0.
        let player2Points = 0; //Sets player 2 beginning points to 0.
        
        for(let i = 0; i < 26; i++) { //for loop that iterates through 26 rounds.
            let currentRound = i + 1; //Counts the rounds
            let card1 = this.deck1.cards[i]; //Delcares current card for Player 1.
            let card2 = this.deck2.cards[i]; //Declares current card for Player 2.
            
            //if else statements to iterate through the rounds and declare a winner
            if(this.deck1.cards[i].values > this.deck2.cards[i].values) { //If player 1 wins...
                player1Points += 1; //If Player 1 has the higher card, awards a point to player1Points total.
                console.log(`Round ${currentRound}:`); //Displays the round, the cards, and that Player 1 has won the round.
                console.log(`Player 1: ${card1.ranks} of ${card1.suits}`);
                console.log(`Player 2: ${card2.ranks} of ${card2.suits}`);
                console.log(`Player 1 wins the round!`)
            } else if (this.deck2.cards[i].values > this.deck1.cards[i].values) { //If player 2 wins...
                player2Points += 1; //Player 2 is awarded a point if higher card is held.
                console.log(`Round ${currentRound}:`); //Displays the round, the cards, and that Player 2 has won the round.
                console.log(`Player 1: ${card1.ranks} of ${card1.suits}`);
                console.log(`Player 2: ${card2.ranks} of ${card2.suits}`);
                console.log(`Player 2 wins the round!`)
            } else if (this.deck1.cards[i].values === this.deck2.cards[i].values) { //If the players tie...
                console.log(`Round ${currentRound}:`); //Displays the round, the cards, and declares that the players have tied.
                console.log(`Player 1: ${card1.ranks} of ${card1.suits}`);
                console.log(`Player 2: ${card2.ranks} of ${card2.suits}`);
                console.log(`The players have tied!`)
            }
        }
        if(player1Points > player2Points) { //If else statements to determine an overall winner.
            console.log(`Player 1: ${player1Points}, Player 2: ${player2Points}`) //Displays point totals for both players
            console.log(`Player 1 wins the War!`) //Player 1 wins!
        } else if (player2Points > player1Points) {
            console.log(`Player 1: ${player1Points}, Player 2: ${player2Points}`) //Point totals.
            console.log(`Player 2 wins the War!`) //Player 2 wins!
        } else {
            console.log(`Player 1: ${player1Points}, Player 2: ${player2Points}`) //Point totals.
            console.log(`The players have tied! The War is a stalemate!`) //Players have tied.
        }   
    }    
}

let startGame = new StartGame; //variable to start game.
startGame.dealDeck(); //calls method for dealing the deck.
startGame.gameInitialization(); //calls method to start the game.

console.log(startGame); //Logs the results of the game.

