var Hand = require('./Hand');

class Player {
    constructor() {
        this.hand = new Hand();
        this.score = 0;
    }

    setHandChoice(value) {
        this.hand.setSymbol(value);
    }

    getHandChoice() {
        return this.hand.symbol;
    }

    setRandomHand() {
        this.hand.setRandomHand();
    }

    updatePlayerScore() {
        this.score ++;
    }

    getPlayerScore() {
        return this.score;
    }
}

module.exports = Player;