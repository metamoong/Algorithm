const fs = require("fs");
const [[N], ...info] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

info.sort((a, b) => {
  if (a[1] === b[1]) return a[0] - b[0];
  return a[1] - b[1];
});

let answer = 0;
let end = 0;

info.forEach((meeting) => {
  const [s, e] = meeting;
  if (end <= s) {
    answer += 1;
    end = e;
  }
});

console.log(answer);
