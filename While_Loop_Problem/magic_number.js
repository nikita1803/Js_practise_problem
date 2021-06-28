console.log("Think number Between 1 to 100");
/**
 * Initializing the variable
 */
var min = 0;
var max = 100;
/**
 * while loop is continue till min is equal to max
 */
while (min != max) {
    var avg = (min + max) / 2;      //avg is finding out.
    var digit = require("readline-sync");
    inputNumber = parseInt(digit.question("If Number is Less than " + avg + " then put 1 and if greater then put 2 else Enter: "));

    /**
     * finding out the maximum and minimum number.
     */
    if (inputNumber == 1) {
        max = Math.floor((min + max) / 2);
    }
    else if (inputNumber == 2) {
        min = Math.floor((min + max) / 2);
    }
    else {
        min = avg;
        max = avg;
    }
}
console.log("Magic Number is: " + avg);     //Printing the value