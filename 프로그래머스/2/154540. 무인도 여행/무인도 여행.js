function solution(maps) {
    const answer = [];
    const mapArr = maps.map(row=>row.split(''));
    const isVisited = Array.from({length:maps.length},()=>new Array(maps[0].length).fill(false));
    

    const dfs = (i,j)=>{
        if(isVisited[i][j] || mapArr[i][j] =='X') return 0;
        isVisited[i][j] = true;
        
        let sum = 0;
        
        if(i+1<maps.length) sum+=dfs(i+1,j);
        if(i-1>=0) sum+= dfs(i-1,j)
        if(j+1<maps[0].length) sum+=dfs(i,j+1);
        if(j-1>=0)sum+=dfs(i,j-1)
        
        return sum + Number(mapArr[i][j]);
    }
    

    for(let i = 0;i<maps.length;i+=1){
        for(let j = 0;j<maps[0].length;j+=1){
            if(!isVisited[i][j]&&mapArr[i][j]!=='X') {
                answer.push(dfs(i,j,0));
            }
        }
    }
    
    if(answer.length===0) return [-1];
    
    
    return answer.sort((a,b)=>a-b);
    
}