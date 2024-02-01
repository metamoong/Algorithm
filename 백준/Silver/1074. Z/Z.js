const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, r, c] = input.split(" ").map(Number);

let answer = 0;
let cnt = 0;

function recur(i1, j1, i2, j2) {
  if (i2 - i1 === 1) {
    for (let i = i1; i <= i2; i++) {
      for (let j = j1; j <= j2; j++) {
        cnt++;
        if (i === r && j === c) answer = cnt;
      }
    }
    return;
  }

  if (r < i1 || r > i2 || c < j1 || c > j2) {
    cnt += (i2 - i1 + 1) ** 2;
    return;
  }
  const d = (i2 - i1 + 1) / 2;
  recur(i1, j1, i1 + d - 1, j1 + d - 1);
  recur(i1, j1 + d, i1 + d - 1, j2);
  recur(i1 + d, j1, i2, j1 + d - 1);
  recur(i1 + d, j1 + d, i2, j2);
}

recur(0, 0, 2 ** N - 1, 2 ** N - 1);
console.log(answer - 1);
