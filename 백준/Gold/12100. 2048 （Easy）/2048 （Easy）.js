const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);
const blocks = input
  .slice(1)
  .map((line) => line.split(" ").map((n) => Number(n)));

const memo = Array.from({ length: 6 }, () => []);
memo[0].push(blocks);

for (let i = 1; i <= 5; i += 1) {
  memo[i - 1].forEach((state) => {
    //shift left
    let newState = [];
    for (let n = 0; n < N; n += 1) {
      const line = new Array(N).fill(0);
      let p = 0;
      for (let m = 0; m < N; m += 1) {
        if (state[n][m] === 0) continue;
        if (line[p] === 0) {
          line[p] = state[n][m];
        } else if (line[p] === state[n][m]) {
          line[p] *= 2;
          p += 1;
        } else {
          p += 1;
          line[p] = state[n][m];
        }
      }
      newState.push(line);
    }
    memo[i].push(newState);
    //shift right
    newState = [];
    for (let n = 0; n < N; n += 1) {
      const line = new Array(N).fill(0);
      let p = N - 1;
      for (let m = N - 1; m >= 0; m -= 1) {
        if (state[n][m] === 0) continue;
        if (line[p] === 0) {
          line[p] = state[n][m];
        } else if (line[p] === state[n][m]) {
          line[p] *= 2;
          p -= 1;
        } else {
          p -= 1;
          line[p] = state[n][m];
        }
      }
      newState.push(line);
    }
    memo[i].push(newState);
    //shift up
    newState = Array.from({ length: N }, () => new Array(N).fill(0));
    for (let m = 0; m < N; m += 1) {
      let p = 0;
      for (let n = 0; n < N; n += 1) {
        if (state[n][m] === 0) continue;
        if (newState[p][m] === 0) {
          newState[p][m] = state[n][m];
        } else if (newState[p][m] === state[n][m]) {
          newState[p][m] *= 2;
          p += 1;
        } else {
          p += 1;
          newState[p][m] = state[n][m];
        }
      }
    }
    memo[i].push(newState);
    //shift down
    newState = Array.from({ length: N }, () => new Array(N).fill(0));
    for (let m = 0; m < N; m += 1) {
      let p = N - 1;
      for (let n = N - 1; n >= 0; n -= 1) {
        if (state[n][m] === 0) continue;
        if (newState[p][m] === 0) {
          newState[p][m] = state[n][m];
        } else if (newState[p][m] === state[n][m]) {
          newState[p][m] *= 2;
          p -= 1;
        } else {
          p -= 1;
          newState[p][m] = state[n][m];
        }
      }
    }
    memo[i].push(newState);
  });
}

console.log(Math.max(...memo[5].flat(3)));
