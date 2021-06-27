const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number between 1 to 7: ",number => {
    console.log(`"the number is:"  ${number}`)
    num = number;
var word = checkDay(num)
console.log("Number in Digit: " + num + " is in Day is: " + word)
readline.close();

});

function checkDay(day)
{
    if(day == 1){
        return "Monday";
    }else if(day ==  2){
        return "Tuesday";
    }else if(day == 3){
        return "Wednesday";
    }else if(day == 4){
       return "Thrusday";
    }else if(day == 5){
        return "Friday";
    }else if(day == 6){
        return "Saturday";j
    }else {
        return "Sunday";
    }
}