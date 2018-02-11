var expect = require('chai').expect;
var Player = require('../client/Player.js');
var Hand = require('../client/Hand.js');
var HandValidator = require('../client/HandValidator.js');

describe('Rock, Paper and Scissors', () => {
    var sut = null;
    beforeEach(() => {
        sut = new Player();
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

    it('should verify the winner Hand', () => {
        sut.setHandChoice('rock');

        var sut2 = new Player();
        sut2.setHandChoice('scissor');

        var validator = new HandValidator(sut.getHandChoice(),
         sut2.getHandChoice());

        expect(validator.validate()).to.eql('rock');
    });
});