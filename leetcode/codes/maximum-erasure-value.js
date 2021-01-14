/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumUniqueSubarray = function(nums) {
    let left = 0;
    let right = 0;
    
    const s = new Set();
    let max = 0;
    while(right < nums.length) {
        if(!s.has(nums[right])) {
            s.add(nums[right]);
            max = Math.max(sum(s), max);
            right++;
        } else {
            s.delete(nums[left]);
            left++;
        }
    }
    
    return max;
};

function sum(s) {
    return [...s].reduce((result, n) => result + n, 0);
}