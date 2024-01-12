const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = +input[0];

const di = [1, -1, 0, 0];
const dj = [0, 0, 1, -1];

let s = 1;
const answer = [];

for (let c = 0; c < T; c++) {
  const [M, N, K] = input[s].split(" ").map(Number);

  const map = Array.from({ length: N }, () => new Array(M).fill(0));

  for (let d = 1; d <= K; d++) {
    const [j, i] = input[s + d].split(" ").map(Number);
    map[i][j] = 1;
  }

  isVisited = Array.from({ length: N }, () => new Array(M).fill(0));
  let cnt = 0;

  function dfs(i, j) {
    isVisited[i][j] = true;
    for (let k = 0; k < 4; k++) {
      if (i + di[k] < 0 || i + di[k] >= N || j + dj[k] < 0 || j + dj[k] >= M)
        continue;
      if (isVisited[i + di[k]][j + dj[k]] || map[i + di[k]][j + dj[k]] === 0)
        continue;
      dfs(i + di[k], j + dj[k]);
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (!isVisited[i][j] && map[i][j] === 1) {
        cnt++;
        dfs(i, j);
      }
    }
  }
  answer.push(cnt);
  s += K + 1;
}
console.log(answer.join("\n"));
