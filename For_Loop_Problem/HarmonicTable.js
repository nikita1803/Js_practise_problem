const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number : ",number => {
    console.log(`"the number is:"  ${number}`)
    num = number;
    var number = parseInt(num)
    var table = 0;
    for (count = 1; count <= number; count++) {
            table = 1 / count;  
    }
    console.log("nth Harmonic Number Value is: "+table)

});
