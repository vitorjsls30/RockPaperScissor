var symbols = require('./symbols.json');

class Hand {
    constructor() {
        this.symbol = null;
    }

    setSymbol(symbolName) {
        this.symbol = {};
        this.symbol[symbolName] = symbols[symbolName];
    }
    
    getSymbol() {
        return this.symbol;
    }

    setRandomHand() {
        var symbolsObj = Object.keys(symbols);
        var rnd = Math.floor(Math.random() * symbolsObj.length);
        var symbolName = symbolsObj[rnd]; 
        this.symbol = {};
        this.symbol[symbolName] = symbols[symbolName];
    }
}

module.exports = Hand;