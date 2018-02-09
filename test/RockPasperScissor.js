var expect = require('chai').expect;
var Player = require('../client/Player.js');
var Hand = require('../client/Hand.js');

describe('Rock, Paper and Scissors', () => {
    var sut = null;
    beforeEach(() => {
        sut = new Player();
    });

    it('it should define a new Player instance', () => {
        expect(sut).not.equal(undefined);
    });

    it('it should set the Player choice', () => {
        sut.setHandChoice('rock');
        expect(sut.getHandChoice()).equal('rock');
    });

});