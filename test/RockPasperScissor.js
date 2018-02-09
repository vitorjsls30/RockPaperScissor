var expect = require('chai').expect;
var Player = require('../client/Player.js');
var Hand = require('../client/Hand.js');

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
        expect(sut.getHandChoice()).to.have.property('defeat');
        expect(sut.getHandChoice()).to.have.property('loses');
    });
});