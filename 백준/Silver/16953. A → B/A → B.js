const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [A, B] = input[0].split(" ").map((n) => Number(n));

let answer = Infinity;
function execute(num, cnt) {
  if (num === B && answer > cnt) {
    answer = cnt;
    return;
  }

  if (num * 2 <= B) execute(num * 2, cnt + 1);
  if (Number(num + "1") <= B) execute(Number(num + "1"), cnt + 1);
}

execute(A, 0);

console.log(answer === Infinity ? -1 : answer + 1);
