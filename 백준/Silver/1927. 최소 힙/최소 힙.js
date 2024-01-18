const fs = require("fs");
const [N, ...numbers] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const heap = [];
let p = 1;
const answer = [];

function addToHeap(num) {
  heap[p] = num;
  let idx = p;
  while (idx > 1 && heap[Math.floor(idx / 2)] > heap[idx]) {
    let tmp = heap[Math.floor(idx / 2)];
    heap[Math.floor(idx / 2)] = heap[idx];
    heap[idx] = tmp;
    idx = Math.floor(idx / 2);
  }
  p++;
}

function removeFromHeap() {
  if (p === 1) {
    answer.push(0);
    return;
  }
  answer.push(heap[1]);
  heap[1] = heap[p - 1];
  p--;

  let idx = 1;

  while (2 * idx < p) {
    let smallIdx = 2 * idx;
    if (2 * idx + 1 < p && heap[2 * idx + 1] < heap[smallIdx]) {
      smallIdx = 2 * idx + 1;
    }
    if (heap[idx] < heap[smallIdx]) {
      break;
    }
    let tmp = heap[idx];
    heap[idx] = heap[smallIdx];
    heap[smallIdx] = tmp;
    idx = smallIdx;
  }
}

numbers.forEach((num) => {
  const number = Number(num);
  if (number === 0) removeFromHeap();
  else addToHeap(number);
});

console.log(answer.join("\n"));
