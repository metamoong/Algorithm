function solution(land) {
    let answer = 0;
    const memo = Array.from({length:land.length},()=>[0,0,0,0]);
    for(let i = 0;i<4;i+=1){
        memo[0][i] = land[0][i];
    }
    for(let i = 1;i<land.length;i+=1){
        for(let j = 0;j<4;j+=1){
            let max = -1;
            memo[i-1].forEach((v,i)=>{
                if(v>max && i!==j) max = v;
            })
            memo[i][j]=land[i][j]+ max;
        }

    }

    return Math.max(...memo[land.length-1]);
}