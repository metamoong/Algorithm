function solution(answers) {
    const answer = [];
    const score = [0,0,0];
    const supo1 = [1,2,3,4,5];
    const supo2 = [2,1,2,3,2,4,2,5]
    const supo3 = [3,3,1,1,2,2,4,4,5,5];
    
    answers.forEach((a,i)=>{
        if(supo1[i%5] === a) score[0] +=1;
        if(supo2[i%8]===a) score[1] +=1;
        if(supo3[i%10] === a) score[2] +=1;
    });
    const max = Math.max(...score);
    score.forEach((a,i)=>{
        if(a === max) answer.push(i+1);
    });

    
    return answer;
}