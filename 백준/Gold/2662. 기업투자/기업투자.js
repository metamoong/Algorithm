const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map((n) => Number(n));
const info = input.map((line) => line.split(" ").map((n) => Number(n)));
info[0] = new Array(M + 1).fill(0);

//i만원을 j회사까지 투자했을 때 최댓값
const memo = Array.from({ length: N + 1 }, () => new Array(M + 1).fill(0));
const amounts = Array.from({ length: N + 1 }, () =>
  Array.from({ length: M + 1 }, () => new Array(M).fill(0))
);

for (let i = 1; i <= N; i += 1) {
  for (let j = 1; j <= M; j += 1) {
    // a[i][j]를 결정하자.

    for (let m = 0; m <= i; m += 1) {
      if (memo[i][j] < memo[i - m][j - 1] + info[m][j]) {
        memo[i][j] = memo[i - m][j - 1] + info[m][j];

        const newAmounts = [...amounts[i - m][j - 1]];
        newAmounts[j - 1] = m;
        amounts[i][j] = newAmounts;
      }
    }
  }
}

console.log(memo[N][M]);
console.log(amounts[N][M].join(" "));
