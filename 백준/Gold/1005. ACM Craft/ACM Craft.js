const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const T = Number(input[0]);
const testCase = input.slice(1);

let p = 0;
for (let i = 0; i < T; i += 1) {
  const [N, K] = testCase[p].split(" ").map((v) => Number(v));
  const times = testCase[p + 1].split(" ").map((v) => Number(v));
  const map = Array.from({ length: N + 1 }, (_, i) => {
    return {
      inCnt: 0,
      out: [],
      isVisited: false,
      time: i === 0 ? 0 : times[i - 1],
    };
  });

  for (let j = p + 2; j < p + 2 + K; j += 1) {
    const [a, b] = testCase[j].split(" ").map((v) => Number(v));
    map[a].out.push(b);
    map[b].inCnt += 1;
  }
  const target = Number(testCase[K + 2 + p]);

  while (map[target].inCnt > 0) {
    const q = [];
    map.forEach((node, i) => {
      if (i === 0) return;
      if (node.inCnt === 0 && !node.isVisited) q.push(i);
    });
    while (q.length > 0) {
      const curr = q.pop();
      map[curr].isVisited = true;
      map[curr].out.forEach((n) => {
        map[n].time = Math.max(map[n].time, map[curr].time + times[n - 1]);
        map[n].inCnt -= 1;
      });
    }
  }

  console.log(map[target].time);

  p += 3 + K;
}
