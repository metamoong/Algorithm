function solution(genres, plays) {
    const obj = {};
    const answer = [];
    for(let i = 0;i<genres.length;i++){
        if(!obj[genres[i]]) obj[genres[i]] = {
            list : [], sum: 0};
        obj[genres[i]].list.push({idx:i,play:plays[i]});
        obj[genres[i]].sum +=plays[i];
    }

    const values = Object.values(obj);
    values.forEach((arr)=>{
        arr.list.sort((a,b)=>{
            if(a.play>b.play) return -1;
            if(a.play<b.play) return 1;
            
            if(a.idx>b.idx) return 1;
            if(a.idx<b.idx) return -1;
        });
    });
    
  
    values.sort((a,b)=>{
        if(a.sum>b.sum) return -1;
        if (a.sum<=b.sum) return 1;
    });
    
    values.forEach((item)=>{
        answer.push(item.list[0].idx);
        if(item.list[1]) {answer.push(item.list[1].idx)};
    });
    
 
    return answer;
}