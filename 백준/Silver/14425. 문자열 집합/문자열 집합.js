const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [cnts, ...strings] = input;
const [N, M] = cnts.split(" ").map((num) => Number(num));

const S = new Set(strings.slice(0, N));
const targets = strings.slice(N);

let answer = 0;

targets.forEach((value) => {
  if (S.has(value)) answer += 1;
});

console.log(answer);
