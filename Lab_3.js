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
 console.log("\n----- Example 3: for loop as decrement counter ------");
        // for loop to print from 9 to 0 in a step of 3 --> 9 6 3 0
        for (let n = 9; n >= 0; n -= 3) {
            console.log(n);
        }

        console.log("\n----- Example 4: for loop in an array (list) ------");
        // set up a list of animals
        let animals = ["fish", "turtle", "dog"];
        for (let index = 0; index < animals.length; index++) {
            console.log(animals[index]);
        }
