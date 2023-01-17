function solution(s){
    const stack = [];

    for(let word of s){
        if(word === '(') stack.push(word);
        else if(word === ')') {
             if(stack.length === 0||stack.pop() !== '('){
                 return false;
             }
         }
    }
    if(stack.length !== 0) return false;
    
    return true;
}