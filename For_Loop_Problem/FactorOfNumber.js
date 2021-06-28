const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number : ",num => {
    console.log(`"the number is:"  ${num}`)
    number = parseInt(num)
    console.log("Prime Factors are: ")
    for (count1 = 1; count1 <= number; count1++) {
        var result = 0
        for (count2 = 1; count2 <= number; count2++) {
            if (((count1 % count2) == 0) && ((number % count1) == 0)) {
                result++
            }
        }
        if(result == 2){
            console.log(count1)
        }
    }
});