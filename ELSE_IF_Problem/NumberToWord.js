const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number between 1 to 9: ",number => {
    console.log(`"the number is:"  ${number}`)
    num = number;
var word = checkWord(num)
console.log("Number in Digit: " + num + " is in Words is: " + word)
readline.close();

});
function checkWord(num) {
    if (num == 1) {
        return "ONE";
    } else if (num == 2) {
        return "TWO";
    } else if (num == 3) {
        return "THREE";
    } else if (num == 4) {
        return "FOUR";
    } else if (num == 5) {
        return "FIVE";
    } else if (num == 6) {
        return "SIX";
    } else if (num == 7) {
        return "SEVEN";
    } else if (num == 8) {
        return "EIGHT";
    } else if (num == 9) {
        return "NINE";
    } else {
        return "Wrong Input";
    }
}