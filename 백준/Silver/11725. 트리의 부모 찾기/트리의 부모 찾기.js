const fs = require("fs");
const input = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map((n) => Number(n)));

const N = input[0];
const tree = Array.from({ length: N + 1 }, () => []);
const parent = new Array(N).fill(0);

input.slice(1).forEach((nodes) => {
  const [v1, v2] = nodes;
  tree[v1].push(v2);
  tree[v2].push(v1);
});

const q = [1];
const isVisited = new Array(N + 1).fill(false);
isVisited[1] = true;
while (q.length > 0) {
  const cur = q.shift();
  tree[cur].forEach((child) => {
    if (isVisited[child]) return;
    parent[child - 1] = cur;
    isVisited[child] = true;
    q.push(child);
  });
}

console.log(parent.slice(1).join("\n"));
