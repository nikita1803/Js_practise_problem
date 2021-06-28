/**
 * palindrome function is created
 * @param num 
 */
function palindrome(num) 
{
    const NUMBER = num
    var reverse = 0
    var a = 0
    /**
     * lopp is continued untill number is equal to 0 or less then 0
     */
    while (num > 0) {
        a = num % 10;
        num = parseInt(num / 10);
        reverse = reverse * 10 + a;
    }
    console.log("Reverse Number is: "+reverse)
    /**
     * Check whether number is equal to reverse or not
     */
    if  (NUMBER == reverse) {
        console.log("Number is palindrome")
    } else {
        console.log("Number is not palindrome")
    }
}
/**
 * Using libraries for input and output from the console
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("Enter Number To Check Palindrome Or Not:",num => {      // lambda function is use
    console.log(`"the number is:"  ${num}`)             // Num is stored
    number = parseInt(num) 
    palindrome(number)
  });