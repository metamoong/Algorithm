function solution(info, edges) {
    const tree  = Array.from({length : info.length},()=>[]);
    let maxSheep = 0;
    
    edges.forEach((edge)=>{
        tree[edge[0]].push(edge[1]);
    })
    
    const dfs = (i,prevVisit,sheep,wolf)=>{
        if(info[i] === 0){
           sheep +=1;
        } 
        else wolf +=1;
        
        if(sheep<=wolf) return;
        if(maxSheep <sheep) maxSheep = sheep;

        
        const shouldVisit = [...tree[i]];
        shouldVisit.push(...prevVisit.filter(v=>v!==i));
        
        
        shouldVisit.forEach((node)=>{
            dfs(node,shouldVisit,sheep,wolf);
        });
        
    }
    
    dfs(0,[],0,0);
    
    return maxSheep;
}