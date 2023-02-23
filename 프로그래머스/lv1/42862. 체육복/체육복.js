function solution(n, lost, reserve) {
    let answer = n - lost.length;
    const state = Array(n+1).fill(1);
    for(let i = 0;i<lost.length;i+=1){
        state[lost[i]] = 0;
    }
    for(let i = 0;i<reserve.length;i+=1){
        if(state[reserve[i]]===0) answer +=1;
        state[reserve[i]] += 1;
    }
    state.forEach((val,idx)=>{
        console.log(val);
        if(val!==0) return;
        if(state[idx-1] == 2){
            state[idx]+=1;
            state[idx-1]-=1;
            answer +=1;
            return;
        }
        if(state[idx+1] ==2 ){
            state[idx]+=1;
            state[idx+1]-=1;
            answer +=1;
            return;
        }
    });
    
  
    return answer;
}