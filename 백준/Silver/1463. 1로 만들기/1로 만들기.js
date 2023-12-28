const fs = require("fs");
const N = Number(fs.readFileSync("/dev/stdin").toString().trim());
const memo = new Array(N + 1).fill(Infinity);
memo[N] = 0;

for (let i = N; i >= 2; i--) {
  if (i % 3 === 0) memo[i / 3] = Math.min(memo[i / 3], memo[i] + 1);
  if (i % 2 === 0) memo[i / 2] = Math.min(memo[i / 2], memo[i] + 1);
  memo[i - 1] = Math.min(memo[i - 1], memo[i] + 1);
}

console.log(memo[1]);
