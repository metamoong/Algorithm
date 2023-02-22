function solution(n, wires) {
    let answer = undefined;
    const arr = Array.from({length:101},()=>[]);
    const isVisited = Array(101).fill(false);
    
    wires.forEach((wire)=>{
        arr[wire[0]].push(wire[1]);
        arr[wire[1]].push(wire[0]);
    });

    
    const count = (i)=>{
        let cnt = 1;
        isVisited[i] = true;
        arr[i].forEach((val,idx)=>{
            if(!isVisited[val]) cnt +=count(val);
        });  
        isVisited[i] =false;
        return cnt;
    }

    wires.forEach((wire)=>{
        isVisited[wire[0]] = true;
        isVisited[wire[1]] = true;
        const cnt1 = count(wire[0]);

        isVisited[wire[0]] = true;
        isVisited[wire[1]] = true;
        const cnt2 = count(wire[1]);
        let diff = cnt1-cnt2;
        
        diff = diff<0 ? -diff : diff;
        if(answer === undefined||diff<answer) answer = diff
        
        isVisited[wire[0]] = false;
        isVisited[wire[1]] = false;
    });

    return answer;
}