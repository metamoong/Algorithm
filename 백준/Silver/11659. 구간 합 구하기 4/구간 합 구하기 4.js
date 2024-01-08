const fs = require("fs");
const [[N, M], numbers, ...ranges] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((n) => Number(n)));

const memo = new Array(N + 1).fill(0);
for (let i = 1; i <= N; i++) {
  memo[i] = memo[i - 1] + numbers[i - 1];
}

const answer = [];
ranges.forEach((range) => {
  const [s, e] = range;
  answer.push(memo[e] - memo[s - 1]);
});

console.log(answer.join("\n"));
