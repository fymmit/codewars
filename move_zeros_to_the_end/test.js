const chai = require('chai');
const { moveZeros } = require('./app');

describe('moveZeros', () => {
    it('should move zeroes to the end', () => {
        chai.assert.equal(
            JSON.stringify(moveZeros([1,2,0,1,0,1,0,3,0,1])),
            JSON.stringify([ 1, 2, 1, 1, 3, 1, 0, 0, 0, 0 ])
        );
    });
    
    it('should move zeroes to the end 2', () => {
        chai.assert.equal(
            JSON.stringify(moveZeros([1,5,0,'a','b',null,0,'a',0,2])),
            JSON.stringify(moveZeros([1,5,'a','b',null,'a',2,0,0,0]))
        );
    });
});
