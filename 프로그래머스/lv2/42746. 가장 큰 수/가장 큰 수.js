function solution(numbers) {
    let answer = '';
    numbers.sort((a,b)=>{
        return Number(b.toString()+a.toString()) - Number(a.toString() + b.toString());
    });
    for(let num of numbers){
        answer += num;
    }
    
    if(numbers[0] === 0) return '0';
    
    return answer;
}