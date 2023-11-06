const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M, k] = input[0].split(" ").map((n) => Number(n));

const map = input
  .slice(1, 1 + N)
  .map((arr) => arr.split(" ").map((n) => Number(n)));
const curDirection = input[N + 1].split(" ").map((n) => Number(n));
const priority = input
  .slice(N + 2)
  .map((arr) => arr.split(" ").map((n) => Number(n)));
const kMap = Array.from({ length: N }, () => new Array(N).fill(0));
const curLoc = Array.from({ length: M + 1 });
const isDead = new Array(M + 1).fill(false);
let liveCnt = M;

for (let i = 0; i < N; i += 1) {
  for (let j = 0; j < N; j += 1) {
    if (map[i][j] !== 0) {
      curLoc[map[i][j]] = [i, j];
      kMap[i][j] = k;
    }
  }
}

const dx = [0, 0, -1, 1];
const dy = [-1, 1, 0, 0];

function move() {
  //움직이기
  for (let i = 1; i <= M; i += 1) {
    if (isDead[i]) continue;
    [curI, curJ] = curLoc[i];

    const curPriority = priority[4 * (i - 1) + curDirection[i - 1] - 1];

    //어느 방향으로 갈 지 정하기 - 냄새 없는 칸
    let newDirection = null;
    for (let j = 0; j < curPriority.length; j += 1) {
      switch (curPriority[j]) {
        case 1:
          if (curI - 1 >= 0 && map[curI - 1][curJ] === 0) newDirection = 1;
          break;
        case 2:
          if (curI + 1 < N && map[curI + 1][curJ] === 0) newDirection = 2;
          break;
        case 3:
          if (curJ - 1 >= 0 && map[curI][curJ - 1] === 0) newDirection = 3;
          break;
        case 4:
          if (curJ + 1 < N && map[curI][curJ + 1] === 0) newDirection = 4;
          break;
      }
      if (newDirection) break;
    }

    //어느 방향으로 갈지 정하기 - 냄새 없는 인접한 칸이 업ㅅ는 경우
    for (let j = 0; j < curPriority.length; j += 1) {
      if (newDirection) break;
      switch (curPriority[j]) {
        case 1:
          if (curI - 1 >= 0 && map[curI - 1][curJ] === i) newDirection = 1;
          break;
        case 2:
          if (curI + 1 < N && map[curI + 1][curJ] === i) newDirection = 2;
          break;
        case 3:
          if (curJ - 1 >= 0 && map[curI][curJ - 1] === i) newDirection = 3;
          break;
        case 4:
          if (curJ + 1 < N && map[curI][curJ + 1] === i) newDirection = 4;
          break;
      }
    }

    curDirection[i - 1] = newDirection;
    curLoc[i] = [curI + dy[newDirection - 1], curJ + dx[newDirection - 1]];
  }

  //같은 칸에 있으면 제거
  for (let m = 1; m < M; m += 1) {
    for (let n = m + 1; n <= M; n += 1) {
      if (
        !isDead[m] &&
        !isDead[n] &&
        curLoc[m][0] === curLoc[n][0] &&
        curLoc[m][1] === curLoc[n][1]
      ) {
        liveCnt -= 1;
        isDead[n] = true;
      }
    }
  }

  //kMap, map갱신
  for (let m = 0; m < N; m += 1) {
    for (let n = 0; n < N; n += 1) {
      if (kMap[m][n] >= 1) kMap[m][n] -= 1;
      if (kMap[m][n] === 0) {
        map[m][n] = 0;
      }
    }
  }
  for (let j = 1; j <= M; j += 1) {
    if (isDead[j]) continue;

    map[curLoc[j][0]][curLoc[j][1]] = j;
    kMap[curLoc[j][0]][curLoc[j][1]] = k;
  }
}

let answer = 0;
while (true) {
  move();
  answer += 1;

  if (liveCnt === 1) break;
  if (answer >= 1000) {
    console.log(-1);
    return;
  }
}

console.log(answer);
