const fs = require("fs");
const [[N, M], ...friends] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const memo = Array.from({ length: N + 1 }, () =>
  new Array(N + 1).fill(Infinity)
);

friends.forEach(([f1, f2]) => {
  memo[f1][f2] = 1;
  memo[f2][f1] = 1;
});

for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= N; j++) {
    for (let k = 1; k <= N; k++) {
      memo[j][k] = Math.min(memo[j][k], memo[j][i] + memo[i][k]);
    }
  }
}

let bacon = Infinity;
let answer = 0;
for (let i = 1; i <= N; i++) {
  let sum = 0;
  for (let j = 1; j <= N; j++) {
    if (i === j) continue;
    sum += memo[i][j];
  }

  if (sum < bacon) {
    bacon = sum;
    answer = i;
  }
}

console.log(answer);
