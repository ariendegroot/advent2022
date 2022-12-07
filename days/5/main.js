let input = require("fs").readFileSync("./source.txt").toString().split("\n");

const crates = {
  1: ["V", "C", "D", "R", "Z", "G", "B", "W"],
  2: ["G", "W", "F", "C", "B", "S", "T", "V"],
  3: ["C", "B", "S", "N", "W"],
  4: ["Q", "G", "M", "N", "J", "V", "C", "P"],
  5: ["T", "S", "L", "F", "D", "H", "B"],
  6: ["J", "V", "T", "W", "M", "N"],
  7: ["P", "F", "L", "C", "S", "T", "G"],
  8: ["B", "D", "Z"],
  9: ["M", "N", "Z", "W"],
};

const moveCrates = (amount, origin, destination) => {
  for (let i = 0; i < amount; i++) {
    const crate = crates[origin].pop();
    crates[destination].push(crate);
  }
};

const parseInstructions = (instructionLine) => {
  let amount = instructionLine.split(" ");
  moveCrates(+amount[1],+amount[3],+amount[5]);
};

input.forEach((crate) => {
  parseInstructions(crate);
});

let returnString = "";
for (const [key, value] of Object.entries(crates)) {
  const lastChar = value[value.length - 1];
  returnString = returnString + lastChar
}

console.log("Answer part 1: " + returnString);