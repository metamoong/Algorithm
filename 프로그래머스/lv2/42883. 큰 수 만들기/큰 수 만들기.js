function solution(number, k) {
    const arr = [...number];
    const q = [];
    
    const len = number.length;

    for(let i = 0;i<len;i+=1){
        const cur = number[i]; 
        while(k>0&&q[q.length-1]<cur&&q.length>0){
            q.pop();
            k-=1;
        }
        q.push(cur);
    }
    
    if(k>0){
        q.splice(q.length-k,k)
    }
    
    return q.join('');
}