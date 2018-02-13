var player = require('./player');
var handValidator = require('./handValidator');

class Game {
    constructor() {
        this.player1 = null;
        this.player2 = null;
        this.hand1Key = null;
        this.hand2Key = null;
        this.matchResult = null;
        this.gameStatus = null;
    }

    startGame() {
        this.player1 = new player();
        this.player2 = new player();
        this.gameStatus = 'started';
    }

    endGame() {
        this.gameStatus = 'finished';
        console.log('Fine! See ya next time! ;)');
    }

    displayGameInfo() {
        console.log('Player1: ', this.hand1Key);
        console.log('Player2: ', this.hand2Key);
        console.log('--------------------');
        console.log('Current Score: ');
        console.log('Player1: ', this.player1.getPlayerScore());
        console.log('Player2: ', this.player2.getPlayerScore());
    }
    
    playGame(value, type) {
        if(type == 'random') {
            this.player1.setRandomHand();
        } else if(type == 'normal') {
            this.player1.setHandChoice(value);
        }
        this.player2.setRandomHand();
        
        var validator = new handValidator(this.player1.getHandChoice(),
        this.player2.getHandChoice());
        
        this.matchResult = validator.validate();
        
        this.hand1Key = Object.keys(this.player1.getHandChoice())[0];
        this.hand2Key = Object.keys(this.player2.getHandChoice())[0];
    
        if(this.hand1Key == this.matchResult) {
            this.player1.updatePlayerScore();
            console.log('Yo! Player1 Won!');
        } else if(this.hand2Key == this.matchResult) {
            this.player2.updatePlayerScore();
            console.log('Wow! Player2 Won!');
        } else {
            console.log('Ops! It\'s a Draw!');
        }

        this.displayGameInfo();
        this.gameStatus = 'finished';

        return this.gameStatus;
    }
}

module.exports = new Game();