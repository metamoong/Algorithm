function solution(commands) {
    const cmdArr = commands.map((cmd)=>{
        return cmd.split(' ');
    });
    const answer = [];
    const sheet = Array.from({length : 50},()=> new Array(50).fill("EMPTY"));
    const parent = Array.from({length : 50},(_,i)=> Array.from({length:50},(_,j)=>[i,j]));
    

    const update = (i,j,value)=>{
        const [pi,pj] = parent[i][j];
        sheet[pi][pj] = value;
    }
    
    const updateAll = (value1,value2)=>{
        for(let i = 0 ;i<50;i+=1){
            for(let j = 0;j<50;j+=1){
                const [pi,pj] = parent[i][j];
                if(sheet[pi][pj] === value1) {
                    sheet[pi][pj] = value2;
                }
            }
        }
    }
    
    const merge = (i1,j1,i2,j2)=>{
        if(i1 === i2 && j1 === j2) return;
        const [pi1,pj1] = parent[i1][j1];
        const [pi2,pj2] = parent[i2][j2];
        
        if(sheet[pi1][pj1] === "EMPTY"){
            for(let m = 0;m<50;m+=1){
                for(let n =0;n<50;n+=1){
                    if(parent[m][n][0] === pi1 && parent[m][n][1] === pj1) {
                        parent[m][n] = [pi2,pj2];
                    }
                }
            }
            // parent[i1][j1] = parent[i2][j2];
            return;
        }
        
        for(let m = 0;m<50;m+=1){
            for(let n =0;n<50;n+=1){
                if(parent[m][n][0] === pi2 && parent[m][n][1] === pj2) {
                    parent[m][n] = [pi1,pj1];
                }
            }
        }
        // parent[i2][j2] = parent[i1][j1];
    }
    
    const unmerge = (i,j)=>{
        const [pi,pj] = parent[i][j];
        const value = sheet[pi][pj];
        for(let m = 0;m<50;m+=1){
            for(let n =0;n<50;n+=1){
                if(parent[m][n][0] === pi && parent[m][n][1] === pj) {
                    parent[m][n] = [m,n];
                    sheet[m][n] = "EMPTY";
                }
            }
        }
        sheet[i][j] = value;
    }
    const print = (i,j)=>{
        const [pi,pj] = parent[i][j];
        answer.push(sheet[pi][pj]);
    }
    
    cmdArr.forEach((v)=>{
        const cmd = v[0];
        switch(cmd){
            case "UPDATE":
                if(v.length === 3) updateAll(v[1],v[2]);
                else update(v[1]-1,v[2]-1,v[3]);
                break;
            case "MERGE":
                merge(v[1]-1,v[2]-1,v[3]-1,v[4]-1);
                break;
            case "UNMERGE":
                unmerge(v[1]-1,v[2]-1);
                break;
            case "PRINT":
                print(v[1]-1,v[2]-1);
                break;
        }
    });
    return answer;
}