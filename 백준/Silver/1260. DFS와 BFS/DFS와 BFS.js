const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, M, V] = input[0].split(" ").map(Number);
const graph = Array.from(
  {
    length: N + 1,
  },
  () => []
);

for (let i = 1; i < M + 1; i++) {
  const [node1, node2] = input[i].split(" ").map(Number);
  graph[node1].push(node2);
  graph[node2].push(node1);
}

graph.forEach((nodes) => {
  nodes.sort((a, b) => a - b);
});

function dfs(s) {
  dfsResult.push(s);
  isVisited[s] = true;
  graph[s].forEach((e) => {
    if (isVisited[e]) return;
    dfs(e);
  });
}

function bfs(v) {
  const q = [v];
  while (q.length > 0) {
    const cur = q.shift();
    if (isVisited[cur]) continue;
    isVisited[cur] = true;
    bfsResult.push(cur);

    graph[cur].forEach((e) => {
      q.push(e);
    });
  }
}

let isVisited = new Array(N + 1).fill(false);
const dfsResult = [];
const bfsResult = [];

dfs(V);
isVisited = new Array(N + 1).fill(false);
bfs(V);

console.log(dfsResult.join(" "));
console.log(bfsResult.join(" "));
