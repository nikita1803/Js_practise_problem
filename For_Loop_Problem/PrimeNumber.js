const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number : ",num => {
    console.log(`"the number is:"  ${num}`)
    number = parseInt(num)
var val = 0;
for (count = 1; count <= number; count++) {
    if ((number % count) == 0) {
        val++
    }
}
if (val == 2) {
    console.log("Number " + number + " is a Prime Number")
} else {
    console.log("Number "+ number + " is a Not a Prime Number")
}
readline.close();
});
