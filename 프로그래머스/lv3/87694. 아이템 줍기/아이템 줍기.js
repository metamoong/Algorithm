function solution(rectangle, characterX, characterY, itemX, itemY) {
    const map = Array.from({length:102},()=>Array(102).fill(0));
    
    rectangle.forEach((rec)=>{
        const x1 = rec[0]*2;
        const y1 = rec[1]*2;
        const x2 = rec[2]*2;
        const y2 = rec[3]*2;
        for(let x = x1;x<=x2;x+=1){
            for(let y = y1;y<=y2;y+=1){
                if(x===x1||x===x2||y===y1||y===y2){
                    if(map[x][y]===0) map[x][y] = 1;
                }
                else map[x][y] = 2;
            }
        }
        
    });
            
    const q = [];
    let length = -1;
    
    q.push([characterX*2,characterY*2]);
    while(q.length>0){
        length +=1;
        
        const way = q.length;
        for(let i = 0;i<way;i+=1){
            const loc = q.shift();
            const x = loc[0];
            const y = loc[1];
            map[x][y] = 0;

            if(x === itemX*2 && y === itemY*2){
                return length/2;
            }
            
            if(map[x+1][y]===1) q.push([x+1,y]);
            if(map[x][y+1]===1) q.push([x,y+1]);
            if(map[x-1][y]===1) q.push([x-1,y]);
            if(map[x][y-1]===1) q.push([x,y-1]);
        }
        
    }
    return 0;
}