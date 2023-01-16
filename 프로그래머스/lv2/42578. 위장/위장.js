function solution(clothes) {
    let obj = {};
    clothes.forEach((arr)=>{
        console.log(obj[arr[1]])
        if(!obj[arr[1]]) obj[arr[1]] =1;
        else obj[arr[1]] +=1;
    });

    let answer = 1;
    Object.keys(obj).forEach((key)=>{
        answer*= (obj[key]+1);
    });
    
    
    return answer-1;
}