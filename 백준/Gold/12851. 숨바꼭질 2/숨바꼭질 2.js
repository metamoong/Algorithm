const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map((n) => Number(n));

const visitCnt = new Array(100001).fill(0);
let p = 0;
const queue = [[N, 0]];
visitCnt[N] = true;

let minTime = Infinity;

while (p < queue.length) {
  const [loc, time] = queue[p];
  visitCnt[loc] += 1;
  if (loc === K) {
    minTime = time;
    break;
  }

  if (loc - 1 >= 0 && visitCnt[loc - 1] === 0) {
    queue.push([loc - 1, time + 1]);
  }
  if (loc + 1 <= 100000 && visitCnt[loc + 1] === 0) {
    queue.push([loc + 1, time + 1]);
  }
  if (2 * loc <= 100000 && visitCnt[2 * loc] === 0) {
    queue.push([2 * loc, time + 1]);
  }
  p++;
}

let cnt = 0;
for (let i = p; i < queue.length; i++) {
  const [loc, time] = queue[i];
  if (loc === K && time === minTime) cnt++;
}

console.log(minTime + "\n" + cnt);
