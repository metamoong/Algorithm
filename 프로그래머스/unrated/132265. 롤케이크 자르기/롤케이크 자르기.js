function solution(topping) {
    let cnt = 0;
    const isContain1 = [];
    let cnt1 = 0;
    const isContain2 = [];
    let cnt2 =0;
    
    topping.forEach((v)=>{
        if(!isContain2[v]){
            isContain2[v] = 1;
            isContain1[v] = 0;
            cnt2 +=1;
        }
        else{
            isContain2[v] +=1;
        }
    })
    

    for(let topp of topping){
        if(!isContain1[topp]) {
            cnt1 +=1;
        };
        isContain1[topp]+=1;
        isContain2[topp]-=1;
        if(!isContain2[topp]){
            cnt2 -=1;
        }
        if(cnt1 === cnt2) cnt +=1;
    }
    
    return cnt;
}