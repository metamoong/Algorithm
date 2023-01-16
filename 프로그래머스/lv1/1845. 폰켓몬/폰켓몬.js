function solution(nums) {
    const N = nums.length;
    const set = new Set(nums);
    const len = set.size;
    
    if(N/2<len) return N/2;
    
    return len;
}