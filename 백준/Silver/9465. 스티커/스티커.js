const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let [T, ...cases] = input;
cases = cases.map((line) => line.split(" ").map((n) => Number(n)));

function solution(p) {
  const n = cases[p][0];
  const memo = Array.from({ length: n + 1 }, () => new Array(3).fill(0));

  for (let i = 1; i <= n; i++) {
    //1. memo[i][0] - 위 고르기
    memo[i][0] = Math.max(memo[i - 1][1], memo[i - 1][2]) + cases[p + 1][i - 1];

    //2. memo[i][1] - 아래 고르기
    memo[i][1] = Math.max(memo[i - 1][0], memo[i - 1][2]) + cases[p + 2][i - 1];

    //3. memo[i][2] - 안고르기
    memo[i][2] = Math.max(memo[i - 1][0], memo[i - 1][1]);
  }

  return Math.max(...memo[n]);
}

const answer = [];
for (let i = 0; i < cases.length; i += 3) {
  answer.push(solution(i));
}

console.log(answer.join("\n"));
