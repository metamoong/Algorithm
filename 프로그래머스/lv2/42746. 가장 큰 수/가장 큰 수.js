function solution(numbers) {
    let answer = '';
    numbers.sort((a,b)=>{
        const str_a = a.toString();
        const str_b = b.toString();
        let idx_a=0, idx_b =0 ;
        while(idx_a<str_a.length&&idx_b<str_b.length){
            if(Number(str_a[idx_a])>Number(str_b[idx_b])) return -1;
            if(Number(str_a[idx_a])<Number(str_b[idx_b])) return 1;
            idx_a +=1;
            idx_b +=1;
        }
        if(idx_a===str_a.length&&idx_b === str_b.length) return 0;
        if(idx_a === str_a.length){
            if(Number(str_b[idx_b])>Number(str_b[0])) return 1;
             return -1;
        }
         if(idx_b === str_b.length){
            if(Number(str_a[idx_a])>Number(str_a[0])) return -1;
             return 1;
        }
    });
    for(let num of numbers){
        answer += num;
    }
    return answer;
}