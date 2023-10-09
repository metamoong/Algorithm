function solution(book_time) {
    var answer = 0;
    const maxTimes = ["00:00"];
    
    book_time.sort();
    
    const isAvailable = (maxTime,targetTime)=>maxTime<=targetTime;
    
    const getAfterClean = (time)=>{
        let h = Number(time.slice(0,2));
        let m = Number(time.slice(3));
        m+=10;
        if(m > 60){
            m-=60;
            h+=1;
        }
        if(h<10){h = '0' + h.toString()};
        if(m<10){m= '0'+m.toString()}
        return h +':'+ m;
    }
    
    book_time.forEach(time=>{
        const start = time[0];
        const end = time[1];
        let flag = false;
        for(let i = 0;i<maxTimes.length;i+=1){
            if(isAvailable(maxTimes[i],start)){
                maxTimes[i] = getAfterClean(end);
                flag = true;
                break;
            } }
        if(!flag) maxTimes.push(getAfterClean(end));
    })
    
    return maxTimes.length;
}