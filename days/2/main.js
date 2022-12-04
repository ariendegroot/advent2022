let input = require("fs").readFileSync("./source.txt").toString().split("\n");

console.log(input);
// //Your total score is the sum of your scores for each round.
// //The score for a single round is the score for the shape you selected
// //(1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).

const scorelist = {
  AX: 4, 
  AY: 8,
  AZ: 3,
  BX: 1, 
  BY: 5,
  BZ: 9,
  CX: 7,
  CY: 2,
  CZ: 6
};
function getScore(round) {
  const opponent = round.charAt(0);
  const response = round.charAt(2);
  console.log("opp", opponent);
  console.log("res", response);

  if (opponent === "A") {
    switch (response) {
      case "X":
        //score 1
        //result = draw 3
        return 4;
        break;
      case "Y":
        //score 2
        // result = win 6
        return 8;
        break;
        case "Z":
        //result = lost 0
        //score 3
        return 3;
        break;
    }
  } else if (opponent === "B") { //
        switch (response) {
          case "X": //rock
            //score 1
            //result = lost 0
            return 1;
            break;
          case "Y":
            //score 2
            // result = draw 3
            return 5;
            break;
          case "Z":
            //result = win 6
            //score 3
            return 9;
            break;
        }
      } else if (opponent === "C") {
        switch (response) {
          case "X":
            //score 1
            //result = win 6
            return 7;
            break;
          case "Y":
            //score 2
            // result = lost 0
            return 2;
            break;
          case "Z":
            //result = draw 3
            //score 3
            return 6;
          break;
        }
      }
  
}

let total = 0;

input.forEach((round) => {
  console.log('score', getScore(round));
  if(getScore(round)) {
    total = total + getScore(round);
  }
});

console.log(total);



let scores = { A: 1, B: 2, C: 3, X: 1, Y: 2, Z: 3 };

myScore = input.reduce((score, round) => {
  [elf, player] = round.split(" ");
  console.log(player);
  player = player.trim();
  score += [3, 0, 6][(a = scores[elf] - scores[player]) < 0 ? 3 - Math.abs(a) : a] + scores[player];
  console.log(score);
  return score;
}, 0);


myScore2 = input.reduce((score, round) => {
  round = round.trim();
  round = round.replace(" ", "");
  score += scorelist[round];
  return score;
}, 0);

console.log(myScore);
console.log(myScore2);