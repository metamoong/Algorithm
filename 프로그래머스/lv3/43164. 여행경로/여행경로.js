function solution(tickets) {
    const visited = [];
    let answer = [];
    const info = {};
    tickets.forEach((t)=>{
        if(!info[t[0]]) info[t[0]] = [];
        info[t[0]].push([t[1],false]);
    });
    const keys = Object.keys(info);
    for(let i = 0;i<keys.length;i+=1){
        let arr = info[keys[i]];
        info[keys[i]].sort((a,b)=>a[0]>b[0]?-1:1);
    }

    const visit = (city)=>{
        city[1] = true;
        visited.push(city[0]);
        if(visited.length === tickets.length+1) {
            answer = [...visited];
        };
        info[city[0]]?.forEach((v)=>{
            if(!v[1]) visit(v);
        });
        city[1] = false;
        visited.pop();
    }
    
    visited.push("ICN");
    info["ICN"].forEach(v=>visit(v));

    return answer;
}