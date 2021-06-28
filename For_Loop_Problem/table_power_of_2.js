const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number : ",number => {
    console.log(`"the number is:"  ${number}`)
    num = number;
    var number = parseInt(num)
    var result = 2 ** number;
    console.log("Limit Of Table is: "+result)
    var table = 0;
    console.log("Table Of Power Of Two")
    for (count = 1; count <= number; count++) {
        if (table != result) {
            table = 2 ** count;
            console.log(table)
        } else {
            console.log("Error")
        }
    }
    readline.close();

});
