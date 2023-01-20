function solution(priorities, location) {
    let fp = location;
    let cnt = 0;
    
    while(priorities.length>0){
        while(true){
            let flag = 0;
            for(let i = 1;i<priorities.length;i++){
                if(priorities[0]<priorities[i]){
                    if(fp === 0){fp = priorities.length-1}
                    else{fp -= 1;}
                    priorities.push(priorities.shift());
                    flag = 1;
                    break;
                }
            }
            if(flag === 0) break;
        }
        if(fp === 0){break;}
        priorities.shift();
        fp -=1;
        cnt +=1;
    }
    return cnt +1;
}