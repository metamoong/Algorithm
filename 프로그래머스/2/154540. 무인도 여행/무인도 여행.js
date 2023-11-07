function solution(maps) {
    const answer = [];
    const mapArr = maps.map(row=>row.split(''));
    const isVisited = Array.from({length:maps.length},()=>new Array(maps[0].length).fill(false));
    

    let max = 0;
    const dfs = (i,j)=>{
        if(isVisited[i][j] || mapArr[i][j] =='X') return;
        isVisited[i][j] = true;
        max += Number(mapArr[i][j]);
        
        if(i+1<maps.length) dfs(i+1,j);
        if(i-1>=0)dfs(i-1,j)
        if(j+1<maps[0].length) dfs(i,j+1);
        if(j-1>=0)dfs(i,j-1)
    }
    

    for(let i = 0;i<maps.length;i+=1){
        for(let j = 0;j<maps[0].length;j+=1){
            if(!isVisited[i][j]&&mapArr[i][j]!=='X') {
                dfs(i,j);
                answer.push(max);
                max = 0 ;
            }
        }
    }
    
    if(answer.length===0) return [-1];
    
    
    return answer.sort((a,b)=>a-b);
    
}