const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const N = Number(input[0]);

const M = Number(input[2]);
const prices = input[1].split(" ").map((n) => Number(n));

let minPrice = Number.MAX_SAFE_INTEGER;
let minIdx = 0;

let secondMinPrice = Number.MAX_SAFE_INTEGER;
let secondMinIdx = 0;

for (let i = 0; i < prices.length; i += 1) {
  if (prices[i] < minPrice) {
    minPrice = prices[i];
    minIdx = i;
  }
  if (i !== 0 && prices[i] < secondMinPrice) {
    secondMinPrice = prices[i];
    secondMinIdx = i;
  }
}

const maxCnt = Math.floor((M - secondMinPrice) / minPrice + 1);

if (maxCnt <= 0 || minPrice * (maxCnt - 1) + secondMinPrice > M) {
  console.log(0);
  return;
}

const room = Array.from({ length: maxCnt }).fill(minIdx);
room[0] = secondMinIdx;

let curPrice = minPrice * (maxCnt - 1) + secondMinPrice;

for (let i = 0; i < room.length; i += 1) {
  for (let j = prices.length - 1; j >= 0; j -= 1) {
    if (i === 0 && room[i] < j && curPrice - secondMinPrice + prices[j] <= M) {
      curPrice = curPrice - secondMinPrice + prices[j];
      room[i] = j;
    } else if (room[i] < j && curPrice - minPrice + prices[j] <= M) {
      curPrice = curPrice - minPrice + prices[j];
      room[i] = j;
    }
  }
}

console.log(room.join(""));