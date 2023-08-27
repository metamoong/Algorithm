function solution(board, skill) {
    let answer = 0;
    const arr = Array.from(
        {length : board.length +1},
        ()=>new Array(board[0].length +1).fill(0));
  
    skill.forEach((v)=>{
        [type,r1,c1,r2,c2,degree] = v;
        const sign = type ==1 ? -1 : 1;
        arr[r1][c1] += sign * degree;
        arr[r1][c2+1] += sign * degree * (-1);
        arr[r2+1][c2+1] += sign * degree;
        arr[r2+1][c1] += sign * degree * (-1);
      
    });
    
    
    for(let i = 0;i<board.length; i+=1){
        for(let j = 0;j<board[0].length;j+=1){
            arr[i][j+1] += arr[i][j];
        }
    }
    for(let i = 0;i<board.length;i+=1){
        for(let j = 0;j<board[0].length;j+=1){
            arr[i+1][j] += arr[i][j];
        }
    }
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            board[i][j] += arr[i][j];
            if(board[i][j]>0) answer +=1;
            }
        }
    
    
    return answer;
}