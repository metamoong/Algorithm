const fs = require("fs");
const [info, ...cases] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));
const [n, m] = info.map(Number);

let destination = [];
const answer = Array.from({ length: n }, () => new Array(m).fill(-1));
for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (cases[i][j] === "2") {
      destination = [i, j, 0];
    }
    if (cases[i][j] === "0") {
      answer[i][j] = 0;
    }
  }
}

const q = [destination];
const di = [1, -1, 0, 0];
const dj = [0, 0, 1, -1];

while (q.length > 0) {
  const [i, j, far] = q.shift();
  answer[i][j] = far;

  for (let k = 0; k < 4; k++) {
    const nextI = i + di[k];
    const nextJ = j + dj[k];
    if (nextI < 0 || nextI >= n || nextJ < 0 || nextJ >= m) continue;
    if (answer[nextI][nextJ] === -1) {
      answer[nextI][nextJ] = 0;
      if (cases[nextI][nextJ] === "1") {
        q.push([nextI, nextJ, far + 1]);
      }
    }
  }
}

for (let i = 0; i < n; i++) {
  console.log(answer[i].join(" "));
}
