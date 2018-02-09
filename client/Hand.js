class Hand {
    constructor() {
        this.symbol = '';
        this.defeats = '';
        this.beatenBy = '';
    }

    setSymbol(value) {
        this.symbol = value;
    }

    getSymbol() {
        return this.symbol;
    }
}

module.exports = Hand;