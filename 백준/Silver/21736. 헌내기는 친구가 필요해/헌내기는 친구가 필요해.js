const fs = require("fs");
const [info, ...map] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const [N, M] = info.split(" ").map(Number);
const campus = map.map((line) => line.split(""));

const di = [1, -1, 0, 0];
const dj = [0, 0, 1, -1];
let answer = 0;
let queue = [];
let p = 0;
let iStart, jStart;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (campus[i][j] === "I") {
      iStart = i;
      jStart = j;
    }
  }
}

queue.push([iStart, jStart]);
campus[iStart][jStart] = "V";

while (p < queue.length) {
  const [i, j] = queue[p];
  p += 1;

  for (let k = 0; k < 4; k++) {
    const ni = i + di[k];
    const nj = j + dj[k];

    if (ni < 0 || ni >= N || nj < 0 || nj >= M) continue;
    if (campus[ni][nj] === "V" || campus[ni][nj] === "X") continue;

    if (campus[ni][nj] === "P") answer += 1;
    campus[ni][nj] = "V";
    queue.push([ni, nj]);
  }
}

console.log(answer ? answer : "TT");
