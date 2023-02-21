function solution(brown, yellow) {
    const answer = [];
    
    for(let i = 1;i<=yellow;i+=1){
        let height = i;
        let length = yellow/i;
        if(Math.floor(length) !== length) continue;
        if((height+2)*2 + (length+2)*2 -4 === brown) {
            answer.push(length+2);
            answer.push(height+2);
            break;
        }
    }
    return answer;
}