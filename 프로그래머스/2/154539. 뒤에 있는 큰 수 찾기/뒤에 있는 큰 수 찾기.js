function solution(numbers) {
    numbers = numbers.map((num,i)=>{return {value:num,idx:i}});
    const answer = new Array(numbers.length).fill(-1);
    
    const stack = [];
    numbers.forEach((number)=>{
        while(stack.length>0 && stack[stack.length-1].value<number.value){
            const num = stack.pop();
            answer[num.idx] = number.value;
        }
        stack.push(number);
    })
    
    return answer;
}
/*
자신보다 뒤에 있음 & 자신보다 큼 & 자신과 가까움
*/