function solution(n, times) {
    times.sort((a,b)=>a-b);
    let start =times[0]; 
    let end = times[times.length-1] * n;
    let answer = end;
    
    while(start<=end){
        let mid = Math.floor((end+start)/2);
        let sum =0 ;
        times.forEach(time=>{
            sum+= Math.floor(mid/time);
        })
      
        if(sum>=n){
            answer = mid;
            end = mid-1;    
        }
        else{
            start = mid+1;
        }        
    }
    

    
    return answer;
}