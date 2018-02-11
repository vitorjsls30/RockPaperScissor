class HandValidator {
    constructor(hand1, hand2) {
        this.hand1 = hand1;
        this.hand2 = hand2;
    }

    validate() {
        var hand1Key = Object.keys(this.hand1)[0];
        var hand2Key = Object.keys(this.hand2)[0];

        var hand2Defeat = this.hand2[hand2Key].defeat;
        var hand2Loses = this.hand2[hand2Key].loses;
        
        if(hand1Key === hand2Loses) {
            return hand1Key;
        } else if(hand1Key === hand2Defeat) {
            return hand2Key;
        } else {
            return 'draw';
        }
    }
}

module.exports = HandValidator;