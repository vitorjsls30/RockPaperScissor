var Player = require('../client/Player.js');

describe('Rock, Paper and Scissors', () => {
    var sut = null;
    beforeEach(() => {
        sut = new Player();
    });

    it('it should define a new Player instance', () => {
        expect(sut).not.toEqual(undefined);
    });

    it('should set the Player choice', () => {
        sut.setHand('rock');
        expect(sut.getHand()).toEqual('rock');
    });
});