// 제출 전 file 경로 수정, \r 제거!
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const V = Number(input[0]);
const infos = input
  .slice(1)
  .map((line) => line.split(" ").map((N) => Number(N)));
const nodes = Array.from({ length: V + 1 }, () => []);

for (let i = 0; i < infos.length; i += 1) {
  for (let j = 1; j < infos[i].length - 1; j += 2) {
    nodes[infos[i][0]].push({
      node: infos[i][j],
      value: infos[i][j + 1],
    });
  }
}

let maxLen = 0;
let arrived = 0;
let isVisited = new Array(V + 1).fill(false);

function dfs(v, len) {
  isVisited[v] = true;
  if (len > maxLen) {
    maxLen = len;
    arrived = v;
  }

  nodes[v].forEach((edge) => {
    if (!isVisited[edge.node]) {
      dfs(edge.node, len + edge.value);
    }
  });
}

dfs(1, 0);
isVisited = new Array(V + 1).fill(false);
dfs(arrived, 0);

console.log(maxLen);
