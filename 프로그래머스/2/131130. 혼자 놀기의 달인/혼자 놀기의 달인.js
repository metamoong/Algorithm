function solution(cards) {
    let answer = 0;
    let score1 = 0;
    let score2 = 0;
    
    for(let i = 0;i<cards.length;i+=1){
        score1 = 0;
        score2 = 0;
        let group1 = new Set(cards);
        let group2 = new Set();
        let cur = i;
        while(true){
            if(group2.has(cur))break;
            score1+=1;
            group1.delete(cur);
            group2.add(cur);
            cur = cards[cur]-1;
        }
        
        const arr2 = [...group1];
        for(let j = 0;j<arr2.length;j+=1){
            score2 = 0;
            let cur = j;
            while(true){
                if(group2.has(cur))break;
                score2+=1;
                group1.delete(cur);
                group2.add(cur);
                cur = cards[cur]-1;
            }
            if(score1*score2>answer)answer = score1*score2;
        }
       
    }
    
    return answer;
}