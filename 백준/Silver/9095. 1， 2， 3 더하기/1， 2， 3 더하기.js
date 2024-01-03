const fs = require("fs");
const [T, ...nums] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(n) {
  const memo = new Array(n + 1).fill(0);
  memo[1] = 1;
  memo[2] = 2;
  memo[3] = 4;

  for (let i = 4; i <= n; i++) {
    memo[i] += memo[i - 3] + memo[i - 2] + memo[i - 1];
  }

  return memo[n];
}
const answer = [];
nums.forEach((num) => {
  answer.push(solution(Number(num)));
});

console.log(answer.join("\n"));
