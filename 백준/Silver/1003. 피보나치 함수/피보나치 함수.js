const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => Number(n));

const [T, ...cases] = input;

const max = Math.max(...cases);
const memo = new Array(max + 1).fill(0);
const answer = [];
memo[0] = [1, 0];
memo[1] = [0, 1];

for (let i = 2; i <= max; i++) {
  memo[i] = [memo[i - 1][0] + memo[i - 2][0], memo[i - 1][1] + memo[i - 2][1]];
}

cases.forEach((num) => {
  answer.push(memo[num]);
});

console.log(answer.map((value) => value[0] + " " + value[1]).join("\n"));
