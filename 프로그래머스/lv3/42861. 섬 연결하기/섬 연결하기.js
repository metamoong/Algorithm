function solution(n, costs) {
    const use = [];
    const isVisited = new Array(n).fill(false);
    costs.sort((a,b)=>a[2]-b[2]);

    const isValid = (bridge)=>{
        const land1 = bridge[0];
        const land2 = bridge[1];
        if(isVisited[land1]&&!isVisited[land2]) return true;
        if(isVisited[land2]&&!isVisited[land1]) return true;
        return false;
    }
    
    use.push(costs[0]);
    isVisited[costs[0][0]] = true;
    isVisited[costs[0][1]] = true;

    while(use.length<n-1){
        for(let i = 0 ;i<costs.length;i+=1){
            if(isValid(costs[i])){
                use.push(costs[i]);
                isVisited[costs[i][0]] = true;
                isVisited[costs[i][1]] = true;
                break;
            };
        }
        console.log(use)
    
    }
    
    let sum =0;
    for(let i = 0;i<use.length;i+=1){
        sum += use[i][2];
    }

    return sum;
}

