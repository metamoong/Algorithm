function solution(n, works) {
    let answer = 0;
    const stack = [];
    
    works.sort((a,b)=>b-a);
    let p = 0;
    let stackp = 0;
    while(n>0){
        if(stack.length ===0 || stack[stackp] === works[p]){
          stack.push(works[p]);
          p+=1;
          continue;
        } 
        stack[stackp] -= 1;
        n-=1;
        stackp+=1;
        if(stackp>=stack.length) stackp = 0;
    
    }
    
   stack.forEach(v=>{
       if(v<=0) return;
       answer+=v*v})
   while(p<works.length){
       answer += works[p]**2;
       p+=1;
   }


    return answer;
}