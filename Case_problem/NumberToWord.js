const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number between 1 to 9: ",number => {
    console.log(`the number is:  ${number}`)
    num = parseInt(number)
var word = checkWord(num)
console.log("Number in Digit: " + num + " is in Words is: " + word)
readline.close();

});

function checkWord(number) {
    switch (number) {
        case 0:
            return "ZERO";
        case 1:
            return "ONE";
        case 2:
            return "TWO";
        case 3:
            return "THREE";
        case 4:
            return "FOUR";
        case 5:
            return "FIVE";
        case 6:
            return "SIX";
        case 7:
            return "SEVEN";
        case 8:
            return "EIGHT";
        case 9:
            return "NINE";
        default:
            return "Wrong Input";
    }
}