const fs = require("fs");
const [[N, M], ...cmap] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));
const isVisited = Array.from({ length: N }, () => new Array(M).fill(false));

function isReadyToMelt(i, j) {
  let exposure = 0;
  if (cmap[i - 1][j] === 2) exposure++;
  if (cmap[i + 1][j] === 2) exposure++;
  if (cmap[i][j - 1] === 2) exposure++;
  if (cmap[i][j + 1] === 2) exposure++;
  if (exposure >= 2) return true;
  return false;
}

const di = [0, 0, 1, -1];
const dj = [1, -1, 0, 0];
function spreadAir(i, j) {
  cmap[i][j] = 2;

  for (let k = 0; k < 4; k++) {
    const nextI = i + di[k];
    const nextJ = j + dj[k];
    if (nextI < 0 || nextI >= N || nextJ < 0 || nextJ >= M) continue;
    if (cmap[nextI][nextJ] === 0) spreadAir(nextI, nextJ);
  }
}

function meltCheese() {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (cmap[i][j] === 1 && isReadyToMelt(i, j)) {
        q.push([i, j]);
        cmap[i][j] = 0;
      }
    }
  }
}

let time = 0;
const q = [[0, 0]];
let p = 0;

while (p < q.length) {
  const curLen = q.length;

  for (let k = p; k < curLen; k++) {
    const [i, j] = q[k];
    spreadAir(i, j);
  }

  meltCheese();

  p = curLen;
  time += 1;
}

console.log(time - 1);
