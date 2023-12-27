const fs = require("fs");
const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((n) => Number(n)));
const [[N], ...space] = input;

let curLoc = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (space[i][j] === 9) curLoc = [i, j];
  }
}

const di = [-1, 1, 0, 0];
const dj = [0, 0, -1, 1];
function bfs(i, j, size) {
  const q = [[i, j, 0]];
  const availables = [];
  const isVisited = Array.from({ length: N }, () => new Array(N).fill(false));

  while (q.length > 0) {
    const [ni, nj, far] = q.shift();
    if (isVisited[ni][nj]) continue;

    isVisited[ni][nj] = true;

    if (
      space[ni][nj] !== 0 &&
      space[ni][nj] < size &&
      (ni !== curLoc[0] || nj !== curLoc[1])
    ) {
      availables.push([ni, nj, far]);
    }

    for (let k = 0; k < 4; k++) {
      if (
        ni + di[k] < 0 ||
        ni + di[k] >= N ||
        nj + dj[k] < 0 ||
        nj + dj[k] >= N ||
        isVisited[ni + di[k]][nj + dj[k]]
      )
        continue;
      if (space[ni + di[k]][nj + dj[k]] <= size) {
        q.push([ni + di[k], nj + dj[k], far + 1]);
      }
    }
  }
  if (availables.length === 0) return [];

  let selected = availables[0];
  for (let k = 0; k < availables.length; k++) {
    if (availables[k][2] < selected[2]) selected = availables[k];
    else if (availables[k][2] === selected[2]) {
      if (availables[k][0] < selected[0]) selected = availables[k];
      else if (
        availables[k][0] === selected[0] &&
        availables[k][1] < selected[1]
      ) {
        selected = availables[k];
      }
    }
  }

  return selected;
}

let time = 0;
let curSize = 2;
let curEatCnt = 0;

space[curLoc[0]][curLoc[1]] = 0;

while (true) {
  let selected = bfs(curLoc[0], curLoc[1], curSize);

  if (selected.length === 0) break;

  space[selected[0]][selected[1]] = 0;
  time += selected[2];
  curEatCnt += 1;
  if (curEatCnt === curSize) {
    curSize += 1;
    curEatCnt = 0;
  }
  curLoc = [selected[0], selected[1]];
}
console.log(time);
