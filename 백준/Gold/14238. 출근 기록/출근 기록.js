const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const str = input.split("");
const wordCnt = {};

for (let i = 0; i < str.length; i += 1) {
  if (!wordCnt[str[i]]) wordCnt[str[i]] = 1;
  else wordCnt[str[i]] += 1;
}

let answer = "";

while (answer.length < str.length) {
  if (
    wordCnt["C"] > 0 &&
    (answer.length - 1 < 0 || answer[answer.length - 1] !== "C") &&
    (answer.length - 2 < 0 || answer[answer.length - 2] !== "C") &&
    !(
      (answer.length - 1 < 0 || answer[answer.length - 1] !== "B") &&
      wordCnt["B"] > (str.length - answer.length) / 2
    )
  ) {
    answer += "C";
    wordCnt["C"] -= 1;
  } else if (
    wordCnt["B"] > 0 &&
    (answer.length - 1 < 0 || answer[answer.length - 1] !== "B")
  ) {
    wordCnt["B"] -= 1;
    answer += "B";
  } else if (wordCnt["A"] > 0) {
    answer += "A";
    wordCnt["A"] -= 1;
  } else {
    break;
  }
}

if (answer.length < str.length) {
  console.log(-1);
} else console.log(answer);