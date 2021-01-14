# Longest Substring Without Repeating Characters

沒有想太多就寫了雙遞回的寫法，這樣複查度 O(n^2)
但下面的解法明顯比較理想，思考方式是利用雙指標，每次遇到重複就只要一棟指標就好，這樣基本上是 O(n) 
這手法叫 Sliding Window

https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/1015257/Sliding-window-wvideo-whiteboard-explanation

```
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0;
    let right = 0;
    let set = new Set();
    let maxSubstringLength = 0;
    
    while (right < s.length) {
        if (!set.has(s.charAt(right))) {
            set.add(s.charAt(right));
            maxSubstringLength = Math.max(maxSubstringLength, set.size);
            right++;
        } else {
            set.delete(s.charAt(left));
            left++;
        }
    }
    
    return maxSubstringLength;
};
```
