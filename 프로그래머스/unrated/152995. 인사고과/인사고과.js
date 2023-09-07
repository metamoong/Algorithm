function solution(scores) {
    let rank = 1;
    let [w1,w2] = scores[0];
    scores.sort((a,b)=> {
        if(a[0] > b[0]) return -1;
        else if(a[0]< b[0]) return 1;
        
        if(a[1]>b[1]) return 1;
        else return -1;
     }); 

    let tmp = scores[0][1];
    for(let i = 0;i<scores.length;i+=1){
        if(w1<scores[i][0] && w2<scores[i][1]) return -1;
        if(scores[i][1]>=tmp){
            if(scores[i][0]+scores[i][1]>w1+w2) rank+=1;
            tmp = scores[i][1];
        }
        
    }
    
    return rank;
}