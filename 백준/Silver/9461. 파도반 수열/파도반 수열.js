const fs = require("fs");
const [T, ...cases] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const memo = [0, 1, 1];
let answer = "";

cases.forEach((num) => {
  const k = Number(num);
  if (memo.length - 1 >= k) {
    answer += "\n" + memo[k];
    return;
  }
  while (memo.length - 1 < k) {
    memo.push(memo[memo.length - 2] + memo[memo.length - 3]);
  }
  answer += "\n" + memo[k];
});

console.log(answer.slice(1));
