function solution(storey) {
    let answer = 0;
    
    const numbers = [0];
    while(storey>0){
        numbers.push(storey%10);
        storey= Math.floor(storey/10);
    }
    
    
    for(let i = numbers.length-1;i>0;i-=1){
        if(numbers[i]>=10){
            numbers[i-1]+=1;
            numbers[i] = (numbers[i]-10);
        }
        if(numbers[i]>=6){
            numbers[i-1]+=1;
            answer += (10-numbers[i]);
        }
        else if(numbers[i]===5){
            if(numbers[i-1]<=4) {
                answer += numbers[i];
            }
            else{
                answer += (10-numbers[i]);
                numbers[i-1]+=1;
            }
        }
        else answer += numbers[i];
    }
    answer += numbers[0];

    return answer;
}