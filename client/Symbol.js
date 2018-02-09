let symbols = {
    rock : {
        defeat: 'scissor',
        loses: 'paper'
    },
    paper: {
        defeat: 'rock',
        loses: 'scissor'
    },
    scissor: {
        defeat: 'paper',
        loses: 'rock'
    }
}

class Symbol {
    constructor() {
        this.symbols = symbols
    }

    getSymbol(key) {
        return this.symbols[key];
    }
}

module.exports = new Symbol();