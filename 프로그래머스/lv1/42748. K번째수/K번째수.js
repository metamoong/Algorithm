function solution(array, commands) {
    const answer = [];
    
    commands.forEach((cmd)=>{
        let tmp = array.slice(cmd[0]-1,cmd[1]);
        tmp.sort((a,b)=>a-b);
        answer.push(tmp[cmd[2]-1]);
    });
    return answer;
}