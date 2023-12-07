const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let string = input[0];
const sub = input[1];
const subLen = sub.length;

const stack = [];
for (let i = 0; i < string.length; i += 1) {
  stack.push(string[i]);

  if (string[i] === sub[subLen - 1]) {
    if (stack.slice(-subLen).join("") === sub) {
      stack.splice(-subLen);
    }
  }
}

if (stack.length === 0) console.log("FRULA");
else console.log(stack.join(""));
