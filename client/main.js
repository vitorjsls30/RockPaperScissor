const program = require('commander');
const {prompt} = require('inquirer');

const game = require('./game');

program
    .version('1.0.0')
    .description('Rock, Paper & Scissor Classic Game - Have Fun!');

const questions = {
    gameStart: {
        type: 'confirm',
        name: 'option',
        message: 'Hi! Would you like to Play Rock, Paper & Scissor?'
    },
    gameType: {
        type: 'list',
        name: 'gameType',
        message: 'Wich type of game you Want?',
        choices: [
            'Player vs Pc',
            'Pc vs Pc'
        ]
    },
    handPick: {
        type: 'list',
        name: 'handPicked',
        message: 'Wich Hand do you choose?',
        choices: [
            'rock',
            'paper',
            'scissor'
        ]
    }
};

program
    .command('start')
    .alias('s')
    .description('Starts a new Game')
    .action(() => {
        prompt(questions.gameStart).then((answer) => {
            var option = answer.option;
            
            if(option == true) {
                game.startGame();
                prompt(questions.gameType).then((answer) => {

                    if(answer.gameType == 'Player vs Pc') {
                        prompt(questions.handPick).then((answer) => {
                            game.playGame(answer.handPicked, 'normal');
                        });
                    } else {
                        game.playGame(null, 'random');
                    }
                });
            } else if (option == false){
                game.endGame();
            }
        });
    })

program.parse(process.argv);