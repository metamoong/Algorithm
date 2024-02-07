const fs = require("fs");
const [info, ...maze] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [N, M] = info.split(" ").map(Number);

const queue = [[0, 0, 1]];
let p = 0;
const isVisited = Array.from({ length: N }, () => new Array(M).fill(false));
isVisited[0][0] = true;

const di = [0, 0, 1, -1];
const dj = [1, -1, 0, 0];
while (queue.length > p) {
  const [i, j, far] = queue[p];

  if (i === N - 1 && j === M - 1) {
    console.log(far);
    break;
  }
  p += 1;

  for (let k = 0; k < 4; k++) {
    const nextI = i + di[k];
    const nextJ = j + dj[k];

    if (nextI < 0 || nextI >= N || nextJ < 0 || nextJ >= M) continue;
    if (maze[nextI][nextJ] !== "1" || isVisited[nextI][nextJ]) continue;

    queue.push([nextI, nextJ, far + 1]);
    isVisited[nextI][nextJ] = true;
  }
}
