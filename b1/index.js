//stack and queue
checkString = s => {
    let stk = [];
    for (let i = 0; i < s.length; i++) {
    let char = stk[s.stk-1];
        if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
            stk.push(s[i]);
        }
        else if ( (char === '(' && s[i] === ')') || (char === '[' && s[i] === ']') || (char === '{' && s[i] === '}') ) {
                stk.pop();
        }
        else {
            return false;
        }
    }
    return stk.length ? false : true;
}

console.log(checkString('[]()'));