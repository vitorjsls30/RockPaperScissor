var Player = require('../client/Player.js')

describe('Rock, Paper and Scissors', () => {
    it('it should define a new Player isntance', () => {
        var sut = new Player();
        expect(sut).not.toEqual(undefined);
    });
});