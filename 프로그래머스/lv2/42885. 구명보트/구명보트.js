function solution(people, limit) {
    let cnt = 0;
    let p1 = 0;
    let p2 = people.length-1;
    people.sort((a,b)=>a-b);
    while(p1<=p2){
        cnt +=1;
        if(people[p1]+people[p2]>limit) {
            p2-=1;
            continue;
        };
        p2-=1;
        p1+=1;
    }
    return cnt;
}