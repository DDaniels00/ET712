/**
 * Dyani Daniels
 * Feb 4, Loops
 */

console.log("student's full name");
console.log("\n------ Example 1: for loops -------");
// use a for loop to print from 0 to 4 -->> 0 1 2 3 4
for (let n = 0; n <= 4; n++) {
    console.log(`counting = ${n}`);
}

console.log("\n------ Example 2: for loop with conditional statement ------");
// collect the initial value from the user
// print all even numbers between the initial value and 20
let initialvalue = parseInt(prompt("Enter initial value: "));
for (initialvalue; initialvalue <= 20; initialvalue++) {
    if (initialvalue % 2 == 0) {
        console.log(initialvalue); // only print even numbers
    }
}
