const fs = require("fs");
const [N, ...paper] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const answer = [0, 0];
function getColor(si, ei, sj, ej) {
  const flag = [false, false];
  for (let i = si; i <= ei; i++) {
    for (let j = sj; j <= ej; j++) {
      if (paper[i][j] === 0) flag[0] = true;
      else if (paper[i][j] === 1) flag[1] = true;
      if (flag[0] && flag[1]) return -1;
    }
  }
  return paper[si][sj];
}
function getCnt(si, ei, sj, ej) {
  const result = getColor(si, ei, sj, ej);
  if (result === -1) {
    const n = Math.ceil((ei - si + 1) / 2);
    getCnt(si, si + n - 1, sj, sj + n - 1);
    getCnt(si, si + n - 1, sj + n, ej);
    getCnt(si + n, ei, sj, sj + n - 1);
    getCnt(si + n, ei, sj + n, ej);
    return;
  }

  answer[result] += 1;
}

const sidx = Number(N) - 1;
getCnt(0, sidx, 0, sidx);
console.log(answer.join("\n"));
