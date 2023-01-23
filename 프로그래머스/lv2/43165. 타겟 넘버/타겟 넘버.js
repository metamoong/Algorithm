function make(sum,arr,idx,target){
    if(idx>=arr.length){
        if(sum === target) return 1;
        else return 0;
    }
    return make(sum+arr[idx],arr,idx+1,target) + make(sum-arr[idx],arr,idx+1,target);
}
function solution(numbers, target) {
    let answer =0;
    answer = make(answer,numbers,0,target);
    
    return answer;
}