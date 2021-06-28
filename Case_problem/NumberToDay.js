const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number between 1 to 7: ",number => {
    console.log(`"the number is:"  ${number}`)
    num = parseInt(number)
var word = checkDay(num)
console.log("Number in Digit: " + num + " is in Day is: " + word)
readline.close();

});

function checkDay(number) {
    switch (number) {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Sunday";
    }
}