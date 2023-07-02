function solution(n, edge) {
    const graph = Array.from({length:n},()=>[]); 
    edge.forEach((v)=>{
        const node1 = v[0];
        const node2 = v[1];
     
        graph[node1-1].push(node2);
        graph[node2-1].push(node1);
    });

    const isVisited = new Array(n).fill(false);
    const fars = [];
    let far = 0;
    const q = [];

    isVisited[0] = true;
    graph[0].forEach((v)=>{
        isVisited[v-1] = true;
        q.push(v);
    });
    
    let cnt = 0;
    while(q.length>0){
        const len = q.length;
        far +=1;
        cnt = len;
        for(let i = 0;i<len;i+=1){
            const ver = q.shift();
            fars[ver-1] = far;
            const list = graph[ver-1];
            list.forEach((v)=>{
                if(!isVisited[v-1]){
                    isVisited[v-1] = true;
                    q.push(v);
                };
            });
        }
    }


    return cnt;
}