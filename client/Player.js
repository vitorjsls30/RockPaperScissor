var Hand = require('./Hand');

class Player {
    constructor() {
        this.hand = new Hand();
    }

    setHandChoice(value) {
        this.hand.setSymbol(value);
    }

    getHandChoice() {
        return this.hand.symbol;
    }

    setRandomHand() {
        
    }
}

module.exports = Player;