/**
 * Bad Solution, need O(n^2)
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length < 2) {
        return s.length;
    }
    
    const arr = s.split('');
    
    let maxLen = 0;
    arr.forEach((lead, seq) => {
        const list = nonRepeatList(arr, seq);
        
        maxLen = Math.max(maxLen, Object.values(list).length);
    });
    
    return maxLen;
};

function nonRepeatList(arr, seq) {
    const list = { [arr[seq]] : true };
    for(let i = seq + 1; i < arr.length; i ++) {
        if(list[arr[i]]) {
            break;
        }
        
        list[arr[i]] = true;
    }
    
    return list;
}