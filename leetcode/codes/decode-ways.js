let pattern = {};

/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(s.startsWith('0')) {
        return 0;
    }
    
    if(s.length === 1) {
        return 1;
    }
    
    if(pattern[s]) {
        return pattern[s];
    }
    
    const n = +s;
    const sub1 = s.substr(1);
    const sub2 = s.substr(2);
    const s2pre = +s.substr(0, 2);
    
    if(s.length === 2) {
        if(n % 10 === 0 && n > 26) return 0;
        if(n % 10 === 0) return 1;
        if(n > 26) return 1;
        
        return 2;
    }

    pattern[s] = numDecodings(sub1) + ((s2pre > 26)? 0 : numDecodings(sub2));
    
    return pattern[s];
};