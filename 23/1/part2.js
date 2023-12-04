const input = require("fs")
  .readFileSync("./source.txt")
  .toString()
  .replace()
  .split("\n");

const number2array = [];
const mappingObject = {
  one: "1",
  two: "2",
  tw: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  ight: "8",
  igh: "8",
  nine: "9",
};

function replaceWordsWithDigits(input) {
  let localInput = input;
  Object.entries(mappingObject).forEach(([key, value]) => {
    localInput = localInput.replaceAll(key, value);
  });
  return localInput;
}

input.forEach((document) => {
  let realNumbers = replaceWordsWithDigits(document);
  let numbers = realNumbers.match(/\d/g);
  let result = `${numbers[0]}${numbers[numbers.length - 1]}`;
  number2array.push(+result);
});

const total2 = number2array.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(total2);
