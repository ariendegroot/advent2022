let input = require("fs").readFileSync("./source.txt").toString().split("\n");

console.log(input);

const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let total = 0;

input.forEach(sack => {

    sack = sack.trim();
    // console.log(sack.length);
    const leftSide = sack.substring(0, (sack.length/2));
    const rightSide = sack.substring((sack.length/2), sack.length);
    total = total + findDuplicates(leftSide, rightSide);
})

function findDuplicates(left, right) {
    let duplicates = [];
    let leftArray = left.split("");
    let rightArray = right.split("");
    leftArray.forEach(char => {
        if(rightArray.includes(char)) {
            duplicates.push(char)
        };
    })

    console.log(duplicates);
    let uniqueItems = [...new Set(duplicates)];
    console.log('uniq', uniqueItems);
    let result = 0;
    uniqueItems.forEach(letter => {
        result = result + alphabet.indexOf(letter) + 1;
    })
    return result;
}

console.log('total:' + total)