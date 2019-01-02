const assert = require('assert');
const hoover = require('./hoover');

describe('Basic result test', () => {
    it('should return right count and final position', async() => {
        let data = await hoover.getData('./input.txt');
        let text = await hoover.parseData(data);
        let res = await hoover.hooverMove(text);
        assert.equal(res.count, 1);
        assert.equal(res.hoover.x, 1);     
        assert.equal(res.hoover.y, 3); 
    })
    it('should return current position if room size is exceeded', async() => {
        let data = await hoover.getData('./wrong.txt');
        let text = await hoover.parseData(data);
        let res = await hoover.hooverMove(text);
        assert.equal(res.count, 1);
        assert.equal(res.hoover.x, 1);     
        assert.equal(res.hoover.y, -1); 
    })
})