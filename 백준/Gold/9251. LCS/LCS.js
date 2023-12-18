const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const str1 = input[0];
const str2 = input[1];

const n1 = str1.length;
const n2 = str2.length;
const memo = Array.from({ length: n1 + 1 }, () => new Array(n2 + 1).fill(0));

for (let i = 1; i <= n1; i += 1) {
  for (let j = 1; j <= n2; j += 1) {
    if (str1[i - 1] === str2[j - 1]) {
      memo[i][j] = memo[i - 1][j - 1] + 1;
    } else {
      memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
    }
  }
}

console.log(memo[n1][n2]);
