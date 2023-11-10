function solution(n, results) {
    let answer = 0;
    const map = Array.from({length:n},()=>new Array(n).fill(-1));
    
    results.forEach(result=>{
        [winner,loser] = result;
        const wIdx = winner-1;
        const lIdx = loser-1;
        map[wIdx][lIdx] = 1;
        map[lIdx][wIdx] = 0;
    });
    
      for(let i = 0;i<n;i+=1){
        for(let j = 0;j<n;j+=1){
            if(map[i][j]===1){
                for(let k = 0;k<n;k+=1){
                    if(map[i][k]===0){
                        map[k][j] = 1;
                        map[j][k] = 0;
                    }
                    if(map[j][k]===1){
                        map[k][i] = 0;
                        map[i][k] = 1;
                    }
                }
            }
        
        }
    }
    
    
    map.forEach(arr=>{
        let cnt = 0;
        arr.forEach(result=>{
            if(result!==-1) cnt+=1;
        })
        if(cnt===n-1) answer+=1;
    })
    
    return answer;
}