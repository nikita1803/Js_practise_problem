const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Enter Number', num1 => {
    console.log(`Entered Numbet is  ${num1}`)
    number1=num1;
  readline.question('Enter Number', num2 => {
    console.log(`Entered Number is ${num2}`);
    number2=num2;
    console.log("Prime Numbers are: ")
for (count1 = 1 + number1; count1 < number2; count1++) {
    var val = 0
    for (count2 = 1; count2 <= count1; count2++) {
        if ((count1 % count2) == 0) {
            val++
        }
    }
    if (val == 2) {
        console.log(count1)
    } else {
        val++
    }
}
  })
});
