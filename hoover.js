const fs = require('fs');
const util = require('util');
const readFile = util.promisify(fs.readFile);

// getData returns contents of path.
async function getData(path) {
    let data = await readFile(path);
    return data.toString();
}

// parseData returns data after parsing.
async function parseData(data) {
    let text = data.split('\n');
    let instr = text
        .pop()
        .split('');
    let lines = text.map(pos);
    let room = lines.shift();
    let hoover = lines.shift();
    dirt = lines;
    return {room, hoover, dirt, instr};

};

// hooverMove imitates hoover's moving and returns its final position and the number of patches of dirt the robot cleaned up.
async function hooverMove(obj) {
    let count = 0;
    for (i = 0; i < obj.instr.length; i++) {
        if (obj.hoover.x > obj.room.x || obj.hoover.y > obj.room.y || obj.hoover.x < 0 || obj.hoover.y < 0) {
            console.log(`Exceeded! The room is only ${obj.room.x}x${obj.room.y}. Unfortunately your hoover cannot walk over the walls :(`);
            return;
        };
        if (cleanedUpCheck(obj.dirt, obj.hoover)) {
            count++;
        }
        switch (obj.instr[i]) {
            case 'N':
                obj.hoover.y++;
                break;

            case 'E':
                obj.hoover.x++;
                break;

            case 'S':
                obj.hoover.y--;
                break;

            case 'W':
                obj.hoover.x--;
                break;
        };
    };
    let hoover = obj.hoover;
    return {hoover, count};
};

//cleanedUpCheck checks if robot gets dirt patches and returns true if it did and false if didn't.
function cleanedUpCheck(d, h) {
    for (let i = 0; i < d.length; i++) 
        if (h.x == d[i].x && h.y == d[i].y) {
            let index = d.indexOf(d[i]);
            d.splice(index, 1);
            return true;
        }
    return false;
};

//pos is a helper function that converts data strings to integer and returns object with x and y positions.
function pos(s) {
    const p = s
        .split(' ')
        .map(Number)
    const x = p[0];
    const y = p[1];
    return {x, y};
};

module.exports = {
    getData,
    parseData,
    hooverMove

}