const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));

let p = 0;
const queue = [[N, 0]];
const isVisited = new Array(100001).fill(false);
let answer = 0;

while (true) {
  const [loc, time] = queue[p++];
  isVisited[loc] = true;
  if (loc === K) {
    answer = time;
    break;
  }
  if (2 * loc <= 100000 && !isVisited[2 * loc]) {
    if (2 * loc === K) {
      answer = time;
      break;
    }
    queue[--p] = [2 * loc, time];
  }
  if (loc + 1 <= 100000 && !isVisited[loc + 1]) {
    queue.push([loc + 1, time + 1]);
  }
  if (loc - 1 <= 100000 && !isVisited[loc - 1]) {
    queue.push([loc - 1, time + 1]);
  }
}

console.log(answer);
