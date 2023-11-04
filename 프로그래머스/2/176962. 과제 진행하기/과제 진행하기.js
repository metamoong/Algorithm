function solution(plans) {
    const stack = [];  
    const answer = [];

       
    plans.sort((a,b)=>a[1]>b[1]?1:-1);
    plans.forEach((plan)=>{
        plan[1] = Number(plan[1].slice(0,2))*60 + Number(plan[1].slice(3));
        plan[2] = Number(plan[2]);
    })
    

    let p = 0;
    let curTime = 0;
    while(p<plans.length){
        if(stack.length === 0){
            stack.push(plans[p]);
            curTime = plans[p][1];
            p++;
            continue;
        }
        let long = plans[p][1]-curTime;
        
        while(long>0&&stack.length>0){
           if(stack[stack.length-1][2]<=long){
               long -= stack[stack.length-1][2];
               answer.push(stack[stack.length-1][0]);
               stack.pop();
           }
            else{
                stack[stack.length-1][2] -= long;
                long = 0;
            }
        }
        curTime = plans[p][1];
        stack.push(plans[p]);
        p++;
        
    }
    while(stack.length>0){
        answer.push(stack.pop()[0]);
    }
    
    return answer;
}