const fs = require("fs");
const [N, ...map] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = Number(N);
const isVisited = Array.from({ length: n }, () => new Array(n).fill(false));

const di = [0, 0, 1, -1];
const dj = [1, -1, 0, 0];
const dfs = (i, j) => {
  isVisited[i][j] = true;

  let sum = 0;
  for (let k = 0; k < 4; k++) {
    const nextI = i + di[k];
    const nextJ = j + dj[k];
    if (nextI < 0 || nextI >= n || nextJ < 0 || nextJ >= n) continue;
    if (isVisited[nextI][nextJ] || map[nextI][nextJ] === "0") continue;
    sum += dfs(nextI, nextJ);
  }

  return sum + 1;
};

const answer = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!isVisited[i][j] && map[i][j] === "1") {
      answer.push(dfs(i, j));
    }
  }
}
console.log(answer.length + "\n" + answer.sort((a, b) => a - b).join("\n"));
