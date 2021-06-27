var number1;
var number2;
var number3;
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})
readline.question(`Enter Number1 `, value1 => {
    console.log(`Value Of Number1 is ${value1}`)
    number1 = parseInt(value1);
    readline.question(`Enter Number2 `, value2 => {
        console.log(`Value Of Number2 is ${value2}`)
        number2 = parseInt(value2);
        readline.question(`Enter Number3 `, value3 => {
            console.log(`Value Of Number3 is ${value3}`)
            number3 = parseInt(value3);
            equation(number1, number2, number3);
            readline.close()
        })
    })
})

function equation(num1, num2, num3) {
    var expr1 = num1 + num2 * num3;
    console.log("Result Of Expression1 is : " + expr1);

    var expr2 = num1 % num2 + num3;
    console.log("Result Of Expression2 is : " + expr2);

    var expr3 = num3 + num1 / num2;
    console.log("Result Of Expression3 is : " + expr3);

    var expr4 = num1 * num2 + num3;
    console.log("Result Of Expression4 is : " + expr4);

    maxValExpr(expr1, expr2, expr3, expr4);
    minValExpr(expr1, expr2, expr3, expr4);
}

function maxValExpr(expr1, expr2, expr3, expr4) {
    if (expr1 > expr2 && expr1 > expr3 && expr1 > expr4) {
        console.log("First Expression has Max Value")
    } else if (expr2 > expr3 && expr2 > expr4) {
        console.log("Second Expression has Max Value")
    } else if (expr3 > expr4) {
        console.log("Third Expression has Max Value")
    } else {
        console.log("Fourth Expression has Max Value")
    }
}

function minValExpr(expr1, expr2, expr3, expr4) {
    if (expr1 < expr2 && expr1 < expr3 && expr1 < expr4) {
        console.log("First Expression has Min Value")
    } else if (expr2 < expr3 && expr2 < expr4) {
        console.log("Second Expression has Min Value")
    } else if (expr3 < expr4) {
        console.log("Third Expression has Min Value")
    } else {
        console.log("Fourth Expression has Min Value")
    }
}