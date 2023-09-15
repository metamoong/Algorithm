function solution(users, emoticons) {
    const rate = [10,20,30,40];
    
    let maxUser = 0;
    let maxSales = 0;
    const selectedRate = [];
    
    const check = ()=>{        
        if(selectedRate.length === emoticons.length){
       
            let userCnt = 0;
            let sales = 0;
            users.forEach((user)=>{
                [minRate,price] = user;
                let sum =0;
                selectedRate.forEach((r,i)=>{
                    if(r>=minRate){
                        sum += emoticons[i]*(1-r/100);
                    }
                });
                if(sum>=price){
                    userCnt+=1;
                    return;
                }
                sales +=sum;
            });
     
            if(maxUser<userCnt){
                maxUser = userCnt;
                maxSales = sales;
                return;
            }
            if(maxUser === userCnt&&maxSales<sales){
                maxSales = sales;
            }
            return;
        }
        for(let i = 0;i<4;i+=1){
            selectedRate.push(rate[i]);
            check();
            selectedRate.pop();
        }
        
    }
    check();
    
    return [maxUser,maxSales];
}