function solution(k, dungeons) {
    var answer = -1;
    const dfs = (i,isVisited,cnt,curK)=>{
        if(dungeons[i][0]>curK||dungeons[i][1]>curK) return;
        const newVisited = [...isVisited];
        newVisited[i] = true;
        if(cnt>answer) answer = cnt;
        for(let idx in newVisited){
            if(newVisited[idx]) continue;
            dfs(idx,newVisited,cnt+1,curK-dungeons[i][1]);
        }
    }
    
    for(let i in dungeons){
        dfs(i,Array(dungeons.length).fill(false),1,k);
    }
    return answer;
}