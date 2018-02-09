class Symbols {
    constructor() {
        this.options = {
            rock: {
                defeat: "scissor",
                loses: "paper"
            },
            paper: {
                defeat: "rock",
                loses: "scissor"
            },
            scissor: {
                defeat: "paper",
                loses: "rock"
            }
        };
    }

    getSymbol(key) {
        return this.options[key];
    }
}

module.exports = Symbols;