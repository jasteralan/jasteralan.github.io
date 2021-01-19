/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const str = `${num}`;  
    const len = str.length;
    
    let ans = '';
    for(let i in [...str]) {
        const deci = len - i;
        switch(deci) {
            case 4:
                ans += handleThousandsDigit(str.substr(i));
                break;
            case 3:
                ans += handleHundredsDigit(str.substr(i));
                break;
            case 2:
                ans += handleDecimal(str.substr(i));
                break;
            case 1:    
                ans += handleDigit(str.substr(i));
                break;
        }
    }
    
    return ans;
};

// I
// II
// III
// IV
// V
// VI
// VII
// VIII
// IX
// X
function handleDigit(str) {    
    const mapper = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
    return mapper[+str];
}

// X
// XX
// XXX
// XL
// L
// LX
// LXX
// LXXX
// XC
// C
function handleDecimal(str) {        
    const mapper = ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'];
    return mapper[+str[0]];
}

// C
// CC
// CCC
// CD
// D
// DC
// DCC
// DCCC
// CM
function handleHundredsDigit(str) {
    const mapper = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'];
    
    return mapper[+str[0]];
}

// M
// MM
// MMM
function handleThousandsDigit(str) {
    const mapper = ['M', 'MM', 'MMM'];
    
    return mapper[+str[0] - 1];
}



