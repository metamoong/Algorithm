function solution(m, n, puddles) {
    const memo = Array.from({length:n+1},()=>new Array(m+1).fill(0));
    puddles.forEach((puddle)=>{
        memo[puddle[1]][puddle[0]] = -1;
    })
    for(let i = 1;i<n+1;i+=1){
        for(let j = 1;j<m+1;j+=1){
            if(i===1 & j ===1) {
                memo[i][j]=1;
                continue;
            }
            if(memo[i][j]==-1) continue;
            let fromUp = 0;
            let fromLeft = 0;
        
            if(i-1>=1&&memo[i-1][j]!==-1){
                fromUp = memo[i-1][j];
            }
            if(j-1>=1 && memo[i][j-1]!==-1){
                fromLeft = memo[i][j-1];
            }
            
            memo[i][j] = (fromUp + fromLeft)%1000000007;
                
        }
     
    }
  
    
    return memo[n][m];
}