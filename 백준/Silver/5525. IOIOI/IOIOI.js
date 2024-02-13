const fs = require("fs");
const [N, M, S] = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const n = Number(N);

let answer = 0;
let counter = 0; // 0: I나올 차례, 1: O나올 차례
let cnt = 0;
for (let i = 0; i < S.length; i++) {
  if (S[i] === "I" && counter === 0) {
    counter = 1;
    cnt++;
    if (cnt >= 2 * n + 1) answer += 1;
    continue;
  }
  if (S[i] === "O" && counter === 1) {
    counter = 0;
    cnt++;
    continue;
  }

  if (S[i] === "I") {
    cnt = 1;
    counter = 1;
  } else {
    cnt = 0;
    counter = 0;
  }
}

console.log(answer);
