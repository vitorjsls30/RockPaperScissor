var Hand = require('./Hand');

class Player {
    constructor() {
        this.hand = new Hand();
    }

    setHand(value) {
        this.hand = value;
    }

    getHand() {
        return this.hand;
    }
}

module.exports = Player;