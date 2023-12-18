const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const answer = [];

const deut = new Set();
for (let i = 1; i < N + 1; i++) {
  deut.add(input[i]);
}
for (let i = N + 1; i < N + 1 + M; i++) {
  if (deut.has(input[i])) answer.push(input[i]);
}
answer.sort();

console.log(answer.length + "\n" + answer.join("\n"));
