const fs = require("fs");
const [n, m, ...pairs] = fs
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const graph = Array.from({ length: Number(n) + 1 }, () => []);
const isVisited = new Array(Number(n) + 1).fill(false);
pairs.forEach((pair) => {
  const [node1, node2] = pair.split(" ").map((n) => Number(n));
  graph[node1].push(node2);
  graph[node2].push(node1);
});

let answer = 0;

function dfs(node) {
  isVisited[node] = true;

  graph[node].forEach((next) => {
    if (isVisited[next]) return;
    answer += 1;
    dfs(next);
  });
}

dfs(1);

console.log(answer);
