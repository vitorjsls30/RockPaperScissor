var expect = require('chai').expect;
var player = require('../client/player');
var handValidator = require('../client/handValidator');

describe('Rock, Paper and Scissors', () => {
    var sut = null;

    beforeEach(() => {
        sut = new player();
    });

    it('should define a new Player instance', () => {
        expect(sut).not.equal(undefined);
    });

    it('should set the Player choice', () => {
        expetedSymbol = {
            rock: {
                defeat: 'scissor',
                loses: 'paper'
            }
        };
        sut.setHandChoice('rock');
        expect(sut.getHandChoice()).eql(expetedSymbol);
    });

    it('should set a Random Hand Symbol', () => {
        sut.setRandomHand();
        var actualHandChoice = sut.getHandChoice();
        var objKeys = Object.keys(actualHandChoice);
        
        var expectedProperties = ['defeat', 'loses'];
        expectedProperties.forEach(prop => {
            expect(actualHandChoice[objKeys]).to.have.property(prop);
        });
    });

    it('should validate the Hand choices', () => {
        sut.setHandChoice('rock');

        var sut2 = new player();
        sut2.setHandChoice('scissor');

        var validator = new handValidator(sut.getHandChoice(),
         sut2.getHandChoice());

        expect(validator.validate()).to.eql('rock');
    });

    it('should validate the Hand choices with a random Hand', () => {
        sut.setHandChoice('paper');

        var sut2 = new player();
        sut2.setRandomHand();

        var expectedResults = [
            'rock', 'paper', 'scissor', 'draw'
        ];

        var validator = new handValidator(sut.getHandChoice(),
         sut2.getHandChoice());

        expect(expectedResults).to.contains(validator.validate());
    });

    it('should get Draw for two Hands alike', () => {
        sut.setHandChoice('paper');

        var sut2 = new player();
        sut2.setHandChoice('paper');

        var validator = new handValidator(sut.getHandChoice(),
         sut2.getHandChoice());
        
        expect(validator.validate()).to.equal('draw');
    });

    it('should retrieve Player score', () => {
        expect(sut.getPlayerScore()).to.equal(0);
    });

    it('should update correctly the Player score after a match', () => {
        sut.setHandChoice('rock');

        var sut2 = new player();
        sut2.setHandChoice('scissor');

        var validator = new handValidator(sut.getHandChoice(),
         sut2.getHandChoice());

        if(validator.validate() == 'rock') {
            sut.updatePlayerScore();
        }
        
        expect(sut.getPlayerScore()).to.equal(1);
    });
});