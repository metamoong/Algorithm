const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input[0].split(" ").map((n) => Number(n));
let blocks = input
  .slice(1)
  .map((line) => line.split(" ").map((n) => Number(n)));

function getBigBlock() {
  const isVisited = Array.from({ length: N }, () => new Array(N).fill(false));
  let bigBlockGroup = [];
  let bigStandardBlock = [N, N];
  let bigRainbowCnt = 0;

  let curGroup = [];
  let curStandardBlock = [N, N];
  let curRainbowCnt = 0;
  let curColor = null;

  function setBigBlock() {
    bigBlockGroup = curGroup;
    bigStandardBlock = curStandardBlock;
    bigRainbowCnt = curRainbowCnt;
  }

  function check(i, j) {
    if (blocks[i][j] === -1 || blocks[i][j] === -2) return;

    if (!curColor) {
      curColor = blocks[i][j];
    }

    if (blocks[i][j] !== curColor && blocks[i][j] !== 0) return;

    isVisited[i][j] = true;
    curGroup.push([i, j]);

    if (blocks[i][j] === 0) curRainbowCnt += 1;
    else {
      if (i < curStandardBlock[0]) {
        curStandardBlock = [i, j];
      } else if (i === curStandardBlock[0] && j < curStandardBlock[1]) {
        curStandardBlock = [i, j];
      }
    }

    if (curGroup.length > bigBlockGroup.length) {
      setBigBlock();
    } else if (curGroup.length === bigBlockGroup.length) {
      if (curRainbowCnt > bigRainbowCnt) {
        setBigBlock();
      } else if (curRainbowCnt === bigRainbowCnt) {
        if (curStandardBlock[0] > bigStandardBlock[0]) {
          setBigBlock();
        } else if (
          curStandardBlock[0] === bigStandardBlock[0] &&
          curStandardBlock[1] > bigStandardBlock[1]
        ) {
          setBigBlock();
        }
      }
    }

    if (i - 1 >= 0 && !isVisited[i - 1][j]) check(i - 1, j);
    if (i + 1 < N && !isVisited[i + 1][j]) check(i + 1, j);
    if (j - 1 >= 0 && !isVisited[i][j - 1]) check(i, j - 1);
    if (j + 1 < N && !isVisited[i][j + 1]) check(i, j + 1);

    // if (blocks[i][j] === 0) {
    //   isVisited[i][j] = false;
    // }
  }

  // 큰 블록 찾기
  for (let i = 0; i < N; i += 1) {
    for (let j = 0; j < N; j += 1) {
      curGroup = [];
      curStandardBlock = [N, N];
      curRainbowCnt = 0;
      curColor = null;
      if (!isVisited[i][j] && blocks[i][j] !== 0 && blocks[i][j] !== -2) {
        check(i, j);
      }
      curGroup.forEach((block) => {
        const [i, j] = block;
        if (blocks[i][j] === 0) isVisited[i][j] = false;
      });
    }
  }

  return bigBlockGroup;
}

function putGravity() {
  const newBlocks = Array.from({ length: N }, () => new Array(N).fill(-2));

  for (let j = 0; j < N; j += 1) {
    let p = N - 1;
    for (i = N - 1; i >= 0; i--) {
      if (blocks[i][j] === -1) {
        newBlocks[i][j] = blocks[i][j];
        p = i - 1;
      } else if (blocks[i][j] !== -2) {
        newBlocks[p][j] = blocks[i][j];
        p--;
      }
    }
  }

  blocks = newBlocks;
}

function rotate() {
  const newBlocks = Array.from({ length: N }, () => new Array(N).fill(-2));

  for (let j = N - 1; j >= 0; j--) {
    for (let i = 0; i < N; i++) {
      newBlocks[N - 1 - j][i] = blocks[i][j];
    }
  }
  blocks = newBlocks;
}

let score = 0;

while (true) {
  const bigBlocks = getBigBlock();

  if (bigBlocks.length < 2) break;

  score += bigBlocks.length ** 2;
  bigBlocks.forEach((block) => {
    const [i, j] = block;
    blocks[i][j] = -2;
  });
  putGravity();
  rotate();
  putGravity();
}

console.log(score);
