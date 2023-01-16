function solution(participant, completion) {
    const sorted_p = [...participant].sort();
    const sorted_c = [...completion].sort();
    const n = completion.length;
    for(let i = 0; i<n;i++){
        if(sorted_p[i]!==sorted_c[i]) return sorted_p[i];
    }
    return sorted_p[n];
    
}