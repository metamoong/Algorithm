function solution(triangle) {
    var answer = 0;
    
    const memo = Array.from({length:triangle.length},(_,i)=>new Array(i+1).fill(0));
    memo[0][0] = triangle[0][0];
    triangle.forEach((tri,i)=>{
        tri.forEach((num,j)=>{
            if(i==0 && j ==0) memo[0][0] = num;
            else{
                let left = 0;
                let right = 0;
                if(j-1>=0){
                    left = memo[i-1][j-1];
                }
                if(j+1<=i+1-1){
                    right = memo[i-1][j];
                }
                memo[i][j] = triangle[i][j] + left > triangle[i][j] + right?triangle[i][j] + left:triangle[i][j] + right;
            }
        })
    })
    
    return Math.max(...memo[triangle.length-1]);
}