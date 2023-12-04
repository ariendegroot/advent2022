const input = require("fs")
  .readFileSync("./source.txt")
  .toString()
  .replace()
  .split("\n");

const number2array = [];

input.forEach((document) => {
  let numbers = document.match(/\d/g);
  let result = `${numbers[0]}${numbers[numbers.length - 1]}`;
  number2array.push(+result);
});

const total = number2array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log("part1", total);
