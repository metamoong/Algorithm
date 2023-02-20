function solution(numbers) {
    let answer = [];
    const isVisited = new Array(numbers.length).fill(0);
    const num_arr = numbers.split('');
    const isSosu = (num)=>{
        if(num === 0||num === 1) return false;
        for(let i = 2;i<num;i+=1){
            if(num%i === 0) return false;
        }
        return true;
    };
    const dfs = (curNum,isVisited)=>{
        if(isSosu(Number(curNum))){
            answer .push(Number(curNum));
        }
        for(let i = 0;i<numbers.length;i+=1){
            let newIsVisited = [...isVisited];
            newIsVisited[i] = 1;
            if(!isVisited[i]) dfs(curNum+numbers[i],newIsVisited);
        }
    }
    for(let i = 0;i<numbers.length;i+=1){
        let newIsVisited = [...isVisited];
        newIsVisited[i] = 1;
        dfs(numbers[i],newIsVisited);
    }
    const set = new Set(answer);
    
    
    
    
    return set.size;
}