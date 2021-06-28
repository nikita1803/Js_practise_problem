/**
 * Palindrome function is created
 * @param PrimeNum 
 */
function palindrome(PrimeNum) 
{
    const number = PrimeNum
    var reverse = 0
    var a = 0
    /**
     * loop is continued till prime number is less than 0
     */
    while (PrimeNum > 0) {
        a = PrimeNum % 10
        PrimeNum = parseInt(PrimeNum / 10)
        reverse = reverse * 10 + a
    }
    /**
     * check whether the number is equal to reverse or not
     */
    if (number == reverse) 
    {
        console.log("Number " + number + " is a prime and its Palindrome is also Prime")
    } 
    else if (number != reverse && number > 0) 
    {
        /**
         * check whether the prime number palindrome is also prime
         */
        var newNum = prime(reverse)
        if (newNum == reverse) 
        {
            console.log("Number " + number + " is a prime and its Palindrome is also Prime")
        } else {
            console.log("Number " + number + " is a Prime but its Palindrome is not a Prime")
        }
    } 
    else 
    {
        console.log("Number is Not a Prime Number")
    }
}
/**
 * prime function is created
 * @param n 
 * check the number is prime or not
 */
function prime(n) {
    var number1 = 0
    for (num = 1; num <= n; num++) {
        if ((n % num) == 0) {
            number1++
        }
    }
    if (number1 == 2) {
        console.log(n + " is a Prime Number")
        return n;
    } else {
        -1
    }
}
/**
 * libraries are use to take the input from the console
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("Enter Number To Check Palindrome Or Not:",num => {      // lambda function is use
    console.log(`"the number is:"  ${num}`)             // Num is stored
    number = parseInt(num) 
var PrimeNum = prime(number)
palindrome(PrimeNum)
});