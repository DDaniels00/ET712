console.log("Student's full name")

console.log("\n----- example 1 -----")
// Select element by class name, "description"
let desc = document.querySelector(".description")
console.log(desc);

// Select element by id name, "title"
let titleNode = document.querySelector("#title")
console.log(titleNode)

// Select elements by tag name, "p"
let par = document.querySelectorAll("p")
console.log(par)

// Select all elements with class name "methods"
let methods = document.querySelectorAll(".methods")
console.log(methods)

// Loop through each element in a node list
console.log("\n----- example 2: Loop through each element in a node list -----")
for (let n = 0; n < methods.length; n++) {
    console.log(methods[n])
}

console.log("\n----- example 3: CLICK EVENT -----")
// Select the button
let btn = document.querySelector(".btnclick")
// Add an event (click) to the button
btn.addEventListener("click", function() {
    alert("BTN WAS CLICKED")
})
console.log("\n ---- example 4: click event to change text content ----")
// Select the elements, 'btnmsg' and 'msg'
let btnmsg = document.querySelector(".btnmsg")
let msg = document.querySelector(".msg")
// Add an event to 'btnmsg' that changes the text content of 'msg'
btnmsg.addEventListener("click", function() {
    msg.innerHTML = "Good afternoon <b> Prof. Wu </b>"
})

console.log("\n ---- Example 5: changing shapes mini-app ----")

// Select elements
let shape = document.querySelector(".shape")
let btncircle = document.querySelector(".btncircle")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")

// Add an event listener to each button
btncircle.addEventListener("click", function() {
    shape.className = "circle"
})
btnsquare.addEventListener("click", function() {
    shape.className = "square"
})
btnrectangle.addEventListener("click", function() {
    shape.className = "rectangle"
})

//Lab 7 Assignment

// EXERCISE
// note: use querySelector() or querySelectorAll()
// collect elements: search for the first p with class ps1
// add a mouseout event to change the text content to "STUDENT'S FULL NAME"
// search for the second p with class ps2
// add a click event to the ps2 to change the font-size to 25px and color to olive when is clicked

//Notes: querySelector(), 

document.querySelector("ps1").addEventListener('mouseout', function() {
    this.textContent = "STUDENT'S FULL NAME";
}) //Part 1-3 of Lab 7 Exercise 
document.querySelector("ps2").addEventListener('click', function() {
    this.style.fontSize = "25px";
    this.style.color = "olive";
})





