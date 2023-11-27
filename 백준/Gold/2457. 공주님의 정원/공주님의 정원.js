const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const flowers = input.slice(1).map((flower) =>
  flower.split(" ").map((n) => {
    if (n.length < 2) return 0 + n;
    else return n;
  })
);

flowers.sort((a, b) => {
  if (a[0] + a[1] > b[0] + b[1]) return 1;
  else return -1;
});

let answer = 0;
let end = "0301";
let p = 0;

while (end <= "1130") {
  if (p >= flowers.length) break;

  let target = p;
  while (p < flowers.length) {
    if (flowers[p][0] + flowers[p][1] > end) break;
    if (
      flowers[p][2] + flowers[p][3] >
      flowers[target][2] + flowers[target][3]
    ) {
      target = p;
    }
    p++;
  }

  if (
    flowers[target][2] + flowers[target][3] <= end ||
    flowers[target][0] + flowers[target][1] > end
  )
    break;

  answer += 1;
  end = flowers[target][2] + flowers[target][3];
}

if (end <= "1130") console.log(0);
else console.log(answer);
