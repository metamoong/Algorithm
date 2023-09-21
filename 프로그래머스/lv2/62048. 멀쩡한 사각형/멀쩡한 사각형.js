function solution(w, h) {
    let answer = 0;
    const calc = (x)=>{
        return h*x/w;
    }
    
    for(let x = 0;x<w;x+=1){
        answer += Math.floor(calc(x));
    }
    
    return answer*2;
}