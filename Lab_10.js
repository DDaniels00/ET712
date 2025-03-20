console.log("student's full name")
// collect elements
const myform = document.querySelectr("#myform")
const greeting = document.querySelector(".greeting")
const greetuser = document.querySelector(".greetuser")

myform.addEventListener("submit", function(event){
event.preventDefualt()

//collect the input value
let username = document.querySelector("#username")
let usernamevalue = username.value

//remove whitespace before and after the username
usernamevalue = username.value

//testing
//console.log(usernamevalue)

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

