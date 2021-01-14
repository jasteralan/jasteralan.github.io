/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if(num1 === '0' || num2 === '0') {
        return '0'
    }
    
    const base = node(num1);
    
    let result = new NodeList(0);
    const lists = num2.split('').reverse().forEach((n, seq) => {    
        result = addList(result, multipliedList(base, n, seq));    
    });

    return toString(result);
};

function toString(node) {
    let l = node;
    let arr = [];
    while(l != null) {
        arr.unshift(l.val);
        l = l.next;
    }
    
    return arr.join('');
}

function addList(l1, l2) {
    const dummy = new NodeList(-1);
    let l = dummy;
    let carry = 0;
    
    while(l1 !== null || l2 !== null) {
        let sum = carry;
        if(l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }
        
        if(l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }
        
        carry = Math.floor(sum / 10);
        l.next = new NodeList(sum % 10);
        l = l.next;
    }
    
    if(carry) {
        l.next = new NodeList(carry);
    }
    
    return dummy.next;
}

function multipliedList(base, multi, trailZero) {
    let baseLoop = base;
    let dummy = new NodeList(-1);
    let l = dummy;
    
    for(i = 0; i < trailZero; i++) {
        l.next = new NodeList(0);
        l = l.next;
    }
    
    let carry = 0;
    while(baseLoop != null) {
        const multiplied = (+baseLoop.val) * (+multi) + carry;
  
        l.next = new NodeList(multiplied % 10);
        l = l.next;
        baseLoop = baseLoop.next;
        
        carry = Math.floor(multiplied / 10); 
    }
    
    if(carry > 0) {
        l.next = new NodeList(carry);
    }
    

    return dummy.next;
}

function NodeList(val, next) {
    this.val = val === undefined? 0 : val;
    this.next = next === undefined? null : next;
}

function node(num) {
    const dummy = new NodeList(-1);
    let l = dummy;
    num.split('').reverse().forEach(i => {
        l.next = new NodeList(i);
        l = l.next;
    });
    
    return dummy.next;
}
