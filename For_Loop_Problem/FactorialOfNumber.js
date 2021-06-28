const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number : ",num => {
    console.log(`"the number is:"  ${num}`)
    number = parseInt(num)
    var result = 1
    for (count = 1; count <= number; count++) {
        result = result * count
    }
    console.log("Factorial Result Of "+number+" is: "+result)
    readline.close();
});