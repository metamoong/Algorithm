function solution(begin, target, words) {
    let far = 0;
    let answer = 0;
    const queue = [];
    const isVisited = Array.from({length:words.length},()=>false);
    const isValid = (value,word)=>{
     
        let cnt = 0;
        for(let i = 0;i<value.length;i++){
            if(value[i]!==word[i]) cnt+=1;
        }
        if(cnt===1) return true;
        return false;
    }

    queue.push(begin);
    while(queue.length){
        const cnt = queue.length;
        for(let i = 0;i<cnt;i++){
            let value = queue.shift();
        if(value === target) {
            answer = far;
            break
        };
        for(let i = 0;i<words.length;i++){
            if(isValid(value,words[i])&&!isVisited[i]){
                isVisited[i] = true;
                queue.push(words[i]);
                }
            }
        }
        far +=1;
    }
    
    return answer;
}