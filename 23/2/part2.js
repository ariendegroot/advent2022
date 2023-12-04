const input = require("fs")
  .readFileSync("./source.txt")
  .toString()
  .replace()
  .split("\n");

const roundResults = [];
const roundScores = [];

input.forEach((game, index) => {
  const gameSplit = game.split(":");
  const rounds = gameSplit[1].trim();
  const roundArray = rounds.split(";");
  roundResults.push(getScore(roundArray, index + 1));
});

function getScore(round, points) {
  const totals = {};
  const limits = {
    red: 12,
    green: 13,
    blue: 14
  }
  round.forEach((item) => {
    const scores = item.split(",");
    scores.forEach(score => {
      score = score.trim();
      const [value, item] = score.split(" ");
      console.log(value, limits[item])
      if(+value > limits[item]) { 
        roundScores.push(points);
        return;
      }   
    })
  })
  return totals;
}

let grandTotal = 0;
let uniqueRounds = [...new Set(roundScores)];

input.forEach((g, i) => {
  const gameNumber = i + 1;
  if(uniqueRounds.includes(gameNumber)) {
    console.log(`${gameNumber} is a valid game`);
  } else {
    console.log(`${gameNumber} is an invalid game`);
    grandTotal = grandTotal + gameNumber;
  }
});

console.log("GRANDTOTAL:::::", grandTotal);