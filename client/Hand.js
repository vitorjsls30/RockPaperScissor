var Symbol = require('./Symbol');

class Hand {
    constructor() {
        this.symbol = {};
    }

    setSymbol(symbolName) {
        this.symbol[symbolName] = Symbol.getSymbol(symbolName);
    }

    setRandomHand() {
        var symbolsObj = Object.keys(Symbol.symbols);
        var rnd = Math.floor(Math.random() * symbolsObj.length);
        var symbolName = symbolsObj[rnd]; 
        
        this.symbol[symbolName] = Symbol.getSymbol(symbolName);
    }

    getSymbol() {
        return this.symbol;
    }
}

module.exports = Hand;