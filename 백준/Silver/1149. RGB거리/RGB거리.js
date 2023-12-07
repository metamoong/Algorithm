// 제출 전 file 경로 수정, \r 제거!
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = input[0];
const costs = input
  .slice(1)
  .map((line) => line.split(" ").map((n) => Number(n)));
const memo = Array.from({ length: N + 1 }, () => new Array(3).fill(0));

for (let i = 1; i <= N; i += 1) {
  for (let c1 = 0; c1 < 3; c1 += 1) {
    const costTmp = [];
    for (let c2 = 0; c2 < 3; c2 += 1) {
      if (c1 === c2) continue;
      costTmp.push(memo[i - 1][c2] + costs[i - 1][c1]);
    }
    memo[i][c1] = Math.min(...costTmp);
  }
}

console.log(Math.min(...memo[N]));
