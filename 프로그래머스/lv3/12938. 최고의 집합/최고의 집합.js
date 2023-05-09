function solution(n, s) {
    const start = Math.floor(s/n);
    if(start === 0 )return [-1];
    
    const answer = Array(n).fill(start);
    let left = s-start*n;

    
    for(let i =answer.length-1;left>0;left-=1,i-=1 ){
        answer[i]+=1;
    }

    
    
    
   
    
    return answer;
}