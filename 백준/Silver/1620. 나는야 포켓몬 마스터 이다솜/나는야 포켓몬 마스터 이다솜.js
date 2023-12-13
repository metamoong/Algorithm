const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((n) => Number(n));
const map = new Map();

for (let i = 1; i < 1 + N; i += 1) {
  map.set(i.toString(), input[i]);
  map.set(input[i], i);
}

const answer = [];
for (let i = N + 1; i < N + 1 + M; i += 1) {
  answer.push(map.get(input[i]));
}

console.log(answer.join("\n"));
