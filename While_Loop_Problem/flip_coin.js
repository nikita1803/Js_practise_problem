/**
 * Initializing the variable
 */
var head = 1
var tail = 1
/**
 * Loop apply upto 10 digit
 */
while ((head <= 11) && (tail <= 11)) {
    var val = Math.floor(Math.random() * 2)     // finding out the random value
    if (val == 0) 
    {
        head++
    } else {
        tail++
    }
}
/**
 * Print head or tail.
 */
console.log("Total Heads: " + (head - 1) + " Total Tails: " + (tail - 1))
if (head == 12) {
    console.log("Head Win 11 Times")
} else {
    console.log("Tail Win 11 Times")
}