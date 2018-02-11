var symbols = require('./symbols.json');

class Hand {
    constructor() {
        this.symbol = {};
    }

    setSymbol(symbolName) {
        this.symbol[symbolName] = symbols[symbolName];
    }

    setRandomHand() {
        var symbolsObj = Object.keys(symbols);
        var rnd = Math.floor(Math.random() * symbolsObj.length);
        var symbolName = symbolsObj[rnd]; 
        
        this.symbol[symbolName] = symbols[symbolName];
    }

    getSymbol() {
        return this.symbol;
    }
}

module.exports = Hand;