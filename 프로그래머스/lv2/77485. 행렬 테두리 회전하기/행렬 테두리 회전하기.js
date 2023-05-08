function solution(rows, columns, queries) {
    let map = Array.from({length:rows},()=>Array(columns).fill(0));
    for(let i = 0 ;i<rows;i+=1){
        for(let j = 0;j<columns;j+=1){
            map[i][j] =i * columns + j+1;
        }
    }
   
    const findMin = (si,ei,sj,ej)=>{
        let min = map[si][sj];
        let i = si;
        let j = sj;
        let prev = map[si+1][sj];
        let tmp;
        const rotate = (i,j)=>{
            tmp = map[i][j];
            if(min>tmp) min = tmp;
            map[i][j] = prev;
            prev = tmp;
        }
        for(i = si,j = sj;j<=ej;j+=1){
            rotate(i,j);
        }
        for(i = si+1,j=ej;i<=ei;i+=1){
            rotate(i,j);
        }
        for(i = ei,j=ej-1;j>=sj;j-=1){
            rotate(i,j);
        }
        for(i = ei-1,j = sj;i>si;i-=1){
            rotate(i,j);
        }
        return min;
    }
    
    const answer = [];
    queries.forEach((query)=>{
        const si = query[0];
        const ei = query[2];
        const sj = query[1];
        const ej = query[3];
        answer.push(findMin(si-1,ei-1,sj-1,ej-1));
    });
  
    return answer;
}