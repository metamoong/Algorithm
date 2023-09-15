const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = Number(input[0]);
const locs = input.slice(1).map((loc) => loc.split(" ").map((l) => Number(l)));

const parents = Array.from({ length: n }, (_, i) => i);
const distances = [];

locs.forEach((loc1, i) => {
  locs.forEach((loc2, j) => {
    if (i >= j) return;
    const distance = Math.sqrt(
      (loc1[0] - loc2[0]) ** 2 + (loc1[1] - loc2[1]) ** 2
    );

    distances.push({
      star1: i,
      star2: j,
      distance: distance,
    });
  });
});

distances.sort((a, b) => a.distance - b.distance);

const getParent = (i) => {
  let curNode = i;

  while (parents[curNode] !== curNode) {
    curNode = parents[curNode];
  }
  return curNode;
};

let sum = 0;

for (let i = 0; i < distances.length; i += 1) {
  const { star1, star2, distance } = distances[i];
  const pstar1 = getParent(star1);
  const pstar2 = getParent(star2);

  if (pstar1 !== pstar2) {
    parents[pstar1] = pstar2;
    sum += distance;
  }
}

console.log(Math.round(sum * 100) / 100);
