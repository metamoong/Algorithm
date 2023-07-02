function solution(n, edge) {
    const graph = Array.from({length:n},()=>[]); 
    edge.forEach((v)=>{
        const node1 = v[0];
        const node2 = v[1];
     
        graph[node1-1].push(node2);
        graph[node2-1].push(node1);
    });

    const isVisited = new Array(n).fill(false);
    const q = [];
    let far = 0;
    let cnt = 0;

    q.push(1);
    isVisited[0] = true;

    while(q.length>0){
        const len = q.length;
        far +=1;
        cnt = len;
        for(let i = 0;i<len;i+=1){
            const ver = q.shift();
            [...graph[ver-1]].forEach((v)=>{
                if(isVisited[v-1]) return;
                isVisited[v-1] = true;
                q.push(v);
            });
        }
    }


    return cnt;
}