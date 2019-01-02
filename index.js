const hoover = require('./hoover');

async function main() {
    let data = await hoover.getData('./input.txt');
    let text = await hoover.parseData(data);
    let res = await hoover.hooverMove(text);
    console.log(`Final hoover position X:${res.hoover.x} Y:${res.hoover.y}`);
    console.log(`The number of patches of dirt the robot cleaned up: ${res.count}`);
    return;
}

main();
