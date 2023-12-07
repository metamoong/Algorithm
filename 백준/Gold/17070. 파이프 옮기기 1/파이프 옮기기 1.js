const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const house = input
  .slice(1)
  .map((line) => line.split(" ").map((n) => Number(n)));

let answer = 0;

function dfs(si, sj, ei, ej) {
  if (ei === N - 1 && ej === N - 1) {
    answer += 1;
    return;
  }

  //대각선
  if (si + 1 === ei && sj + 1 === ej) {
    //가로
    if (ej + 1 < N && house[ei][ej + 1] !== 1) dfs(ei, ej, ei, ej + 1);
    //세로
    if (ei + 1 < N && house[ei + 1][ej] !== 1) dfs(ei, ej, ei + 1, ej);
    //대각선
    if (
      ej + 1 < N &&
      ei + 1 < N &&
      house[ei][ej + 1] !== 1 &&
      house[ei + 1][ej] !== 1 &&
      house[ei + 1][ej + 1] !== 1
    ) {
      dfs(ei, ej, ei + 1, ej + 1);
    }
  }
  //가로
  else if (sj + 1 === ej) {
    if (ej + 1 < N && house[ei][ej + 1] !== 1) dfs(ei, ej, ei, ej + 1);
    if (
      ej + 1 < N &&
      ei + 1 < N &&
      house[ei][ej + 1] !== 1 &&
      house[ei + 1][ej] !== 1 &&
      house[ei + 1][ej + 1] !== 1
    ) {
      dfs(ei, ej, ei + 1, ej + 1);
    }
  }
  //세로
  else if (si + 1 === ei) {
    if (
      ej + 1 < N &&
      ei + 1 < N &&
      house[ei][ej + 1] !== 1 &&
      house[ei + 1][ej] !== 1 &&
      house[ei + 1][ej + 1] !== 1
    ) {
      dfs(ei, ej, ei + 1, ej + 1);
    }
    if (ei + 1 < N && house[ei + 1][ej] !== 1) dfs(ei, ej, ei + 1, ej);
  }
}

dfs(0, 0, 0, 1);
console.log(answer);
