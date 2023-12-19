const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [info, ...lines] = input;
const [R, C] = info.split(" ").map((n) => Number(n));

const board = lines;
const set = new Set();

let answer = 0;

function dfs(i, j) {
  set.add(board[i][j]);
  if (set.size > answer) answer = set.size;

  if (i - 1 >= 0 && !set.has(board[i - 1][j])) dfs(i - 1, j);
  if (i + 1 < R && !set.has(board[i + 1][j])) dfs(i + 1, j);
  if (j - 1 >= 0 && !set.has(board[i][j - 1])) dfs(i, j - 1);
  if (j + 1 < C && !set.has(board[i][j + 1])) dfs(i, j + 1);

  set.delete(board[i][j]);
}
dfs(0, 0);

console.log(answer);
