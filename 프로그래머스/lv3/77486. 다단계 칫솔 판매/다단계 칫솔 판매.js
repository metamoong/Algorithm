function solution(enroll, referral, seller, amount) {
    const result = Array(enroll.length).fill(0);
    const map = {};
    enroll.forEach((v,i)=>{
        map[v] = i;
    })
  
    const calProfit = (i,profit)=>{
        let curProfit = profit;
        let curIdx = i;
     
        while(true){
            if(curProfit < 10) {
                result[curIdx] += curProfit;
                break;
            }
            const nextProfit = Math.floor(curProfit*0.1);
            
            result[curIdx] += curProfit - nextProfit;
            if(referral[curIdx] === '-') break;
            curProfit = nextProfit;
            curIdx = map[referral[curIdx]];
        }
    }
    
    
    seller.forEach((v,i)=>{
        const profit = amount[i] * 100;
        calProfit(map[v],profit);
    })

        

    return result;
}