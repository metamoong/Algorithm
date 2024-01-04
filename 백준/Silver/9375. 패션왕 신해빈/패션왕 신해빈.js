const fs = require("fs");
const [T, ...cases] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

function solution(i) {
  const N = Number(cases[i]);
  const map = {};

  for (let j = i + 1; j < i + 1 + N; j++) {
    const [_, type] = cases[j].split(" ");
    if (!map[type]) map[type] = 1;
    else map[type] += 1;
  }
  let count = 1;
  for (key in map) {
    count *= map[key] + 1;
  }

  return count - 1;
}

let answer = "";
for (let i = 0; i < cases.length; ) {
  answer += "\n" + solution(i);
  i += Number(cases[i]) + 1;
}

console.log(answer.slice(1));
