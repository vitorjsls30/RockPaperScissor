class Player {
    constructor() {
        this.hand = '';
    }

    setHand(value) {
        this.hand = value;
    }

    getHand() {
        return this.hand;
    }
}

module.exports = Player;