function solution(n, roads, sources, destination) {
    const gph = Array.from({length:n+1},()=>[]);
    const fars = new Array(n+1).fill(-1);
    const q = {
        arr : [destination],
        front:0,
        length:1
        
    }

    roads.forEach((r)=>{
        const loc1 = r[0];
        const loc2 = r[1];
        gph[loc1].push(loc2);
        gph[loc2].push(loc1);
    })
    
    const isVisited = new Array(n+1).fill(false);

    let far = 0;
    while(q.length>0){
        let len = q.length;
        for(let i = 0;i<len;i+=1){
            let cur = q.arr[q.front];
            q.front +=1;
            q.length -=1;
            if(isVisited[cur]) continue;
            isVisited[cur] = true;
            fars[cur] = far;
            gph[cur].forEach((v)=>{
                if(!isVisited[v]) {
                    q.arr.push(v);
                    q.length +=1;
                }
            })
        }
        far +=1;
    }



   return  sources.map((v)=>fars[v])

}