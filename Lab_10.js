console.log("student's full name")
// collect elements
const myform = document.querySelectr("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")
const btnsubmit = document.querySelector(".btnsubmit")
const errormsg = document.querySelector(".errormsg")

window.addEventListener("load", function(event)){
  event.preventDefault()


myform.addEventListener("submit", function(event){
event.preventDefault()

//collect the username
let username = document.querySelector("#username")
let usernamevalue = username.value

//collect the password
let password = document.querySelector("#username")
let usernamevalue = username.value


//remove whitespace before and after the username
usernamevalue = username.value.trim()
passwordvalue = paswordvalue.trim()

//testing
//console.log(usernamevalue)
//validation of username

  if(usernamevalue===""){
  alert("Please enter a username")
  return; // stops futher executions
  }

//print the username in the greeting message
  greetuser.innerHTML = usrnamevalue
greeting.style.display = block

//clear imput value
username.value =""

  })

