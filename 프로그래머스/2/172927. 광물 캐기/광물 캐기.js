function solution(picks, minerals) {
    let answer = 25*minerals.length;
    const piroMap = [
        [1,1,1],
        [5,1,1],
        [25,5,1]
    ];
    const mineralMapper = {
        "diamond":0,
        "iron":1,
        "stone":2
    }
    
    const isPicksEmpty = ()=>{
       for(let i =0;i<picks.length;i+=1){
           if(picks[i]!==0) return false;
       }
        return true;
    }
    
    const mine = (pickIdx,mineralIdx,piro)=>{
        picks[pickIdx]-=1;
    
        let newPiro = piro;
        for(let i = mineralIdx;i<mineralIdx+5;i+=1){
            if(i>=minerals.length) break;
            newPiro += piroMap[pickIdx][mineralMapper[minerals[i]]]; 
        }
     
        if(isPicksEmpty()||mineralIdx+5>=minerals.length){
            if(newPiro<answer) answer = newPiro;
            picks[pickIdx]+=1;
            return;
        }

        if(picks[0]>0) mine(0,mineralIdx+5,newPiro);
        if(picks[1]>0) mine(1,mineralIdx+5,newPiro);
        if(picks[2]>0) mine(2,mineralIdx+5,newPiro);
        
        picks[pickIdx]+=1;
    }
    
    for(let i = 0;i<3;i+=1){
        if(picks[i]>0) mine(i,0,0);
    }
    
    return answer;
}