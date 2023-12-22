const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [info, ...map] = input;
const [N, M] = info.split(" ").map((n) => Number(n));

const value = Array.from({ length: N }, () =>
  Array.from({ length: M }, () => new Array(2).fill(0))
);

const di = [-1, 1, 0, 0];
const dj = [0, 0, 1, -1];

value[0][0] = [1, 1];
q = [[0, 0, 1]];

let idx = 0;
while (idx < q.length) {
  const [i, j, breakable] = q[idx];
  idx++;

  if (i === N - 1 && j === M - 1) break;
  for (let k = 0; k < 4; k++) {
    if (i + di[k] < 0 || i + di[k] >= N || j + dj[k] < 0 || j + dj[k] >= M) {
      continue;
    }
    if (
      value[i + di[k]][j + dj[k]][breakable] === 0 &&
      map[i + di[k]][j + dj[k]] === "0"
    ) {
      q.push([i + di[k], j + dj[k], breakable]);
      value[i + di[k]][j + dj[k]][breakable] = value[i][j][breakable] + 1;
    } else if (map[i + di[k]][j + dj[k]] === "1" && breakable) {
      if (value[i + di[k]][j + dj[k]][0] === 0) {
        q.push([i + di[k], j + dj[k], 0]);
        value[i + di[k]][j + dj[k]][0] = value[i][j][breakable] + 1;
      }
    }
  }
}

const answer = Math.max(...value[N - 1][M - 1]);
console.log(answer === 0 ? -1 : answer);
