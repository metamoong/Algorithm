function solution(n, computers) {
    let answer = 0
    const nodes = Array.from({length:computers.length},()=>0);
    const go = (i)=>{
        nodes[i] = 1;
        const info = computers[i];
        for(let j = 0;j<info.length;j++){
            if(info[j]===1&&nodes[j]===0) go(j);
        }
    }
    for(let i = 0;i<nodes.length;i++){
        if(nodes[i]===0) {
            answer +=1;    
            go(i)
        };
    }

    
    return answer;
}