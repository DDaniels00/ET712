console.log("Full Name")
/**
*example 1
// collect the elememnt
let btnpressme = document.querySelector(".btnpressme")

// add a click event to change the button text and background color when the button is clicked

btnpressme.addEventListener("click", function(){
  if(btnpressme.textContent === "PRESS ME"){
btnpressme.textContent = "Button was pressed!"
}
else{
  e.target.textContent = "PRESS ME"
}
//toggle between class 'btnactive' and 'btnpressme'
e.target.classlist.toggle("btnactive")
})


  /**
  * Example 2
  */
// remove the <li> if it is clicked 
// collect the element
let fruitist = document.querySelector(#fruitlist")
//fruitlist.addEventListener("click", function(event){
// check if the clicked elemement is a 'li'
if(event.target.tagName.toLowerCase() === 'li'){
}
  })
/**
*example 3: prevent default 
*/
// collect the element
let linkqcc = document.querySelector(".linkqcc")
linkqcc.addEventListen("click", function(event){
  event.preventDefault()
  alert("QCC website is off")
})

