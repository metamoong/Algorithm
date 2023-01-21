function solution(citations) {
    citations.sort((a,b)=>b-a);
    
    let cur = 0;
    for(let h = citations[0];h>=0;h--){
        while(cur !==citations.length && citations[cur]>=h) cur+=1;
        if(cur>=h) return h;
    }

}