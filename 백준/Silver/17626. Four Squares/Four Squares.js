const fs = require("fs");
const n = +fs.readFileSync("/dev/stdin").toString().trim();
const memo = new Array(n + 1).fill(Infinity);
memo[1] = 1;
for (let i = 2; i <= n; i++) {
  if (Math.floor(Math.sqrt(i)) ** 2 === i) {
    memo[i] = 1;
    continue;
  }
  for (let j = 1; j * j < i; j++) {
    memo[i] = Math.min(memo[j * j] + memo[i - j * j], memo[i]);
  }
}
console.log(memo[n]);
