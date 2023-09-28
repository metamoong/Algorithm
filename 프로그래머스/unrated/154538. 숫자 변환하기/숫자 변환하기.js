function solution(x, y, n) {
    const memo = Array.from({length:1000000},()=>new Set());
    memo[0].add(x);
    
    const add = (num)=>num+n;
    const multiply2 = (num)=>num*2;
    const multiply3 = (num)=>num*3;
    
    if(x===y) return 0;

    for(let i = 1;i<1000000;i+=1){
        [...memo[i-1]].forEach(num=>{
            if(num>=y)return;
            memo[i].add(add(num));
            memo[i].add(multiply2(num));
            memo[i].add(multiply3(num));
        })
        if(memo[i].has(y)) return i;
    }
    
    return -1;
}