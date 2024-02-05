const fs = require("fs");
const [N, K] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const q = [[N, 0]];
let p = 0;
const isVisited = new Array(100000).fill(false);

while (q.length > 0) {
  const [curN, time] = q[p];
  isVisited[curN] = true;
  p += 1;

  if (curN === K) {
    console.log(time);
    break;
  }

  if (curN - 1 >= 0 && !isVisited[curN - 1]) {
    q.push([curN - 1, time + 1]);
  }
  if (curN + 1 <= 100000 && !isVisited[curN + 1]) {
    q.push([curN + 1, time + 1]);
  }
  if (2 * curN <= 100000 && !isVisited[2 * curN]) {
    q.push([2 * curN, time + 1]);
  }
}
