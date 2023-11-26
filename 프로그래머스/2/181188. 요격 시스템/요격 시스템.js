function solution(targets) {
    let answer =0;

    targets.sort((a,b)=>a[0]-b[0]);
    
    let end = 0;
    targets.forEach(target=>{
        const [s,e] = target;
         if(end<=s){
            answer +=1;
            end = e;
        }
        else if(end>e) end = e;

    })
    
    

    
    return answer;
}

