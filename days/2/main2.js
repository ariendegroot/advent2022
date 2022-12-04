let input = require("fs").readFileSync("./source.txt").toString().split("\n");

console.log(input);

const scorelist = {
    AX: 3, //3 loose + 0 3
    AY: 4, //1 draw + = 4
    AZ: 8, //2 win + 6  =8
    BX: 1, //1 loose + 0 = 1
    BY: 5, //2 draw + 3 = 5 
    BZ: 9, //3 win + 6 = 9
    CX: 2, //2 + 0 = 2
    CY: 6, //3 draw + 3 = 6
    CZ: 7  //1 win + 6 = 7
  };
myScore = input.reduce((score, round) => {
  round = round.trim();
  round = round.replace(" ", "");
  score += scorelist[round];
  return score;
}, 0);
console.log(myScore);