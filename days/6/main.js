let input = require("fs").readFileSync("./source.txt").toString();

console.log(input);

const getMarker = (device = "mjqjpqmgbljsphdztnvjfqwrcgsmlb") => {
  let sequence = device.split("");
  for(let i = 4; i < sequence.length; i++) {
    let subset = sequence.slice(i -4, i);
    let uniqueItems = [...new Set(subset)];
    if(uniqueItems.length === 4) {
      console.log("token at position", i);
      return;
    }
  }

};

const getMessage = (device = "mjqjpqmgbljsphdztnvjfqwrcgsmlb") => {
  let sequence = device.split("");
  for(let i = 0; i < sequence.length; i++) {
    let subset = sequence.slice(i -14, i);
    let uniqueItems = [...new Set(subset)];
    if(uniqueItems.length === 14) {
      console.log("Message at position", i);
      return;
    }
  }

};

getMarker(input);
getMessage(input);
