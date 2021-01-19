/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {   
    let l = 0, r = height.length - 1;
    let max = 0;
    while(l < r) {
        max = Math.max(max, getMaxArea(height, l, r));
        if(height[l] < height[r]) {
            l++;
        } else {
            r--;
        }
    }
    
    return max;
};

function getMaxArea(height, l, r) {
    return Math.min(height[l], height[r]) * (r - l);
}