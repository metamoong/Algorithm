function solution(weights) {
    let answer = 0;
    const loc = [3/2,4/3,4/2,2/3,2/4,3/4];
    const info = {};
    
    weights.forEach(weight=>{
        if(weight in info) info[weight]+=1;
        else info[weight] = 1;
    })

    weights.forEach(weight=>{
        if(info[weight]>1) {
            answer+= (info[weight]-1);
        }
        
        loc.forEach(l=>{
            if(l*weight in info){
                answer += info[l*weight];
            }
        })
    })
    
    return answer/2;
}