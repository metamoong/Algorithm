function solution(board) {
    let answer = -1;
    
    const isVisited = Array.from({length:board.length},()=>new Array(board[0].length).fill(false));
    
    let si,sj;
    for(let i = 0;i<board.length;i+=1){
        for(let j = 0;j<board[0].length;j+=1){
            if(board[i][j] === 'R'){
                si = i;
                sj = j;
            }
        }
    }
    
    const getSlideLoc = (i,j,dir)=>{
        const [a,b] = dir;
      
        while((i+a>=0&&i+a<board.length)&&(j+b>=0&&j+b<board[0].length)
             &&board[i+a][j+b]!=="D"){
            i+=a;
            j+=b;
        }
        return [i,j];
    }
    
    
    const q = [[si,sj]];
    const direction = [[0,-1],[0,1],[1,0],[-1,0]];
    let cnt = 0;
    
    while(q.length>0){
        const n = q.length;
        for(let k = 0;k<n;k++){
            const [i,j] = q.shift();
            isVisited[i][j] = true;
            
            if(board[i][j] === "G") {
                return cnt;
            }
          
            for(let d = 0;d<4;d++){
                const [newi,newj] = getSlideLoc(i,j,direction[d]);
                if(!isVisited[newi][newj]) q.push([newi,newj]);
            }         
        }
        cnt++;
    }

 
    return answer;
}