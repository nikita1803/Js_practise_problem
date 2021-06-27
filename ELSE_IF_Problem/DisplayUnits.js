const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter any number 10 ,100,1000: ",number => {
    console.log(`"the number is:"  ${number}`)
    num = number;
var unit = checkUnit(num)
console.log("Num in Digit is : " + num + " and its unit is: " + unit)
readline.close();

});

function checkUnit(num) {
    if ((num>=0) && (num<10)) {
        return "Unit";
    } else if ((num>=10) && (num<100)) {
        return "Ten";
    } else if ((num>=100) && (num<1000)) {
        return "Hundred";
    } else if ((num>=1000) && (num<10000)) {
        return "Thousand";
    } else if ((num>=10000) && (num<100000)) {
        return "Ten Thousand";
    } else if ((num>=100000) && (num<1000000)) {
        return "Lakh";
    } else {
        return "Not in Limit"
    }
}
