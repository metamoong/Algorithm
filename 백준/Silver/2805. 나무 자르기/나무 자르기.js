const fs = require("fs");
const [[N, M], heights] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

let left = 0;
let right = Math.max(...heights);
let mid = Math.floor((left + right) / 2);

while (left <= right) {
  const sum = heights.reduce((acc, curValue) => {
    if (curValue <= mid) return acc;
    else return acc + curValue - mid;
  }, 0);
  if (sum === M) break;
  else if (sum > M) left = mid + 1;
  else right = mid - 1;

  mid = Math.floor((left + right) / 2);
}
console.log(mid);
