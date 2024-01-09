const fs = require("fs");
const [sizes, ...map] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));
const [N, M] = sizes.map(Number);
const empty = [];
const virus = [];

for (let i = 0; i < N; i++) {
  for (let j = 0; j < M; j++) {
    if (map[i][j] === "0") empty.push([i, j]);
    if (map[i][j] === "2") virus.push([i, j]);
  }
}

let virusSpreadCnt = 0;
const di = [1, -1, 0, 0];
const dj = [0, 0, 1, -1];
function dfs(i, j) {
  virusSpreadCnt += 1;
  map[i][j] = "2";
  for (let idx = 0; idx < 4; idx++) {
    if (
      i + di[idx] < 0 ||
      i + di[idx] >= N ||
      j + dj[idx] < 0 ||
      j + dj[idx] >= M
    )
      continue;
    if (map[i + di[idx]][j + dj[idx]] !== "0") continue;
    dfs(i + di[idx], j + dj[idx]);
  }
}

const safes = [];

for (let i = 0; i < empty.length; i++) {
  for (let j = i + 1; j < empty.length; j++) {
    for (let k = j + 1; k < empty.length; k++) {
      const [x1, y1] = empty[i];
      const [x2, y2] = empty[j];
      const [x3, y3] = empty[k];
      map[x1][y1] = "1";
      map[x2][y2] = "1";
      map[x3][y3] = "1";

      virusSpreadCnt = 0;

      virus.forEach(([x, y]) => {
        dfs(x, y);
      });

      safes.push(empty.length - 3 - virusSpreadCnt + virus.length);

      empty.forEach(([x, y]) => {
        map[x][y] = "0";
      });
      map[x1][y1] = "0";
      map[x2][y2] = "0";
      map[x3][y3] = "0";
    }
  }
}

console.log(Math.max(...safes));
