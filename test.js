const assert = require('assert');
const hoover = require('./hoover');

async function main() {
    let data = await hoover.getData('./input.txt');
    let text = await hoover.parseData(data);
    let res = await hoover.hooverMove(text);
    assert.equal(res.count, 1);
    assert.equal(res.hoover.x, 1);
    assert.equal(res.hoover.y, 3);
  };
  
  main();