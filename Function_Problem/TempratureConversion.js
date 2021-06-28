/**
 * Function is created to convert the degree celsius to farhenite
 * @param degC 
 */
function degFarhenite(degC) 
{
    if (degC >= 0 && degC <= 100) {
        degF = (degC * 9 / 5) + 32;
        console.log("Temp In Farheenite: " + degF)
    } 
    else 
    {
        console.log("Temp Not In Range 0-100 degree Celsius")
    }
}
/**
 * Function is cretaed to convert degree farhenite to cesius
 * @param degF 
 */
function degCelsius(degF) 
{
    if (degF >= 32 && degF <= 212) 
    {
        degC = (degF - 32) * 5 / 9;
        console.log("Temp In Celcius: " + degC)
    } 
    else 
    {
        console.log("Temp Not In Range 32-212 degree Farhenite")
    }
}
console.log("1. for Celsius to Farhenite 2. for Farhenite to Celsius")
/**
 * library is use to take the input from console
 */
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  readline.question("enter the number : ",num => {      // lambda function is use
    console.log(`"the number is:"  ${num}`)             // Num is stored
    number = parseInt(num) 
convTemp(number)
/**
 * Function is created to use convert the temprature
 * @param number 
 */
function convTemp(number) 
{
    switch (number) 
    {
        case 1:
              readline.question("enter the number : ",num => {      // lambda function is use
                console.log(`"the number is:"  ${num}`)             // Num is stored
                degC = parseInt(num) 
            degFarhenite(degC)
              });
              break;
        case 2:
              readline.question("enter the number : ",num => {      // lambda function is use
                console.log(`"the number is:"  ${num}`)             // Num is stored
                degF = parseInt(num) 
            degCelsius(degF)
            
              });
              break;
        default:
            console.log("Error")
    }
}
});