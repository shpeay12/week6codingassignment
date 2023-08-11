const expect = chai.expect; //Initializes Chai

describe('originalDeck function', () => {
    it('should create a new deck of 52 cards', () => {
        let test = originalDeck();
        expect(test).to.be.lengthOf(52);
    })
    it('should create a deck with suits, ranks, and values properties', () =>{
        let test = originalDeck();
        expect(test[0]).to.have.property('suits');
        expect(test[0]).to.have.property('ranks');
        expect(test[0]).to.have.property('values');
    })
})

describe('shuffle method', () => {
    it('should shuffle the originalDeck', () => {
        let shuffle = new Deck;
        expect(shuffle).to.not.equal(originalDeck())
    })
})

describe('dealDeck method', () => {
    it('should create two new decks with 26 cards', () => {
        let test = new StartGame;
        test.dealDeck();
        expect(test.deck1.cards.length).to.equal(26);
        expect(test.deck2.cards.length).to.equal(26);
    })
})