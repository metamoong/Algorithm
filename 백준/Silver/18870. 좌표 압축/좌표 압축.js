const fs = require("fs");
const [N, ...[spots]] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const setList = [...new Set(spots)];
setList.sort((a, b) => a - b);

const map = {};
setList.forEach((spot, i) => {
  map[spot] = i;
});

console.log(spots.map((spot) => map[spot]).join(" "));
