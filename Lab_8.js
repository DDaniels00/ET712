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
