function solution(N, number) {
    var answer = 0;
    const memo = Array.from({length:9},()=>[]);
    memo[1].push(N);
    if(N===number ) return 1;
    
    const addAvailables = (i,j)=>{
        memo[i].forEach((num1)=>{
            memo[j].forEach((num2)=>{
                memo[i+j].push(num1+num2);
                memo[i+j].push(num1*num2);
                memo[i+j].push(num2/num1);
                memo[i+j].push(num1/num2);
                memo[i+j].push(num1-num2);
          
               
            })
        });
    }
    
    
    for(let i = 2;i<9;i+=1){
        for(let j = 1;j<=Math.floor(i/2);j+=1){
            memo[i].push(Number((N.toString()).repeat(i)));
            addAvailables(j,i-j);
            if(memo[i].includes(number)){
                return i;
            }
        }
        
    }
    return -1;
}