var Symbol = require('./Symbol');

class Hand {
    constructor() {
        this.symbol = {};
    }

    setSymbol(value) {
        this.symbol[value] = Symbol.getSymbol(value);
    }

    getSymbol() {
        return this.symbol;
    }
}

module.exports = Hand;