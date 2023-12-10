const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const values = input.map((line) => line.split(" ").map((n) => Number(n)));
const [N, M] = values[0];
const [know, ...knowNumbers] = values[1];
const parties = values.slice(2);

const isKnow = Array.from({ length: N + 1 }, () => false);
knowNumbers.forEach((num) => (isKnow[num] = true));

const parent = Array.from({ length: N + 1 }, (n, i) => i);

function findParent(num) {
  while (parent[num] !== num) {
    num = parent[num];
  }
  return num;
}

parties.forEach((party) => {
  const [n, ...numbers] = party;

  let p = findParent(numbers[0]);

  for (let i = 0; i < numbers.length; i += 1) {
    const parent = findParent(numbers[i]);
    if (isKnow[parent]) {
      p = parent;
      break;
    }
  }

  numbers.forEach((num) => {
    parent[findParent(num)] = p;
  });
});

let answer = 0;

parties.forEach((party) => {
  let target = findParent(party[1]);

  if (!isKnow[target]) answer += 1;
});

console.log(answer);
