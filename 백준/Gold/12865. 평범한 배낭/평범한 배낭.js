const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const values = input.map((line) => line.split(" ").map((n) => Number(n)));
const [N, K] = values[0];
values[0] = [0, 0];

const memo = Array.from({ length: N + 1 }, () => new Array(K + 1).fill(0)); //i번째 물건까지 j무게를 사용했을 때 가치 최대

for (let i = 1; i <= N; i++) {
  for (let j = 0; j <= K; j++) {
    memo[i][j] = memo[i - 1][j];
    if (
      j - values[i][0] >= 0 &&
      memo[i - 1][j - values[i][0]] + values[i][1] > memo[i][j]
    ) {
      memo[i][j] = memo[i - 1][j - values[i][0]] + values[i][1];
    }
  }
}

console.log(memo[N][K]);