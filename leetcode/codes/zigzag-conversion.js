/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if(numRows === 1) {
        return s;
    }
    
    const arr = [...new Array(numRows)].map(r => ([]));    
    return tail(arr, s, 0, down = true);
};

function tail(result, s, row, down) {    
    if(!s) {
        return toStr(result);
    }
    
    result[row].push(s[0]);
    
    row = down? row + 1 : row -1;
    if(down && row === result.length) {
        row = result.length - 2;
        down = false;
    } else if (!down && row < 0) {
        row = 1;
        down = true;
    }
    
    return tail(result, s.substr(1), row, down);
}

function toStr(result) {
    return result.reduce((r, row) => r + row.join(''), '');
}