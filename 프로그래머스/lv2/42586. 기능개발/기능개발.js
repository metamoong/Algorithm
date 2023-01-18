function solution(progresses, speeds) {
    const answer = [];
    const date = progresses.map((pg,idx)=>Math.ceil((100-pg)/speeds[idx]));
    for(let i = 0;i<date.length;i++){
        let cnt = 1;
        i++;
        while(date[i-1]>=date[i]){
            date[i] = date[i-1];
            i++;
            cnt++;
        }
        answer.push(cnt);
        i--;
    }
    
    return answer;
}