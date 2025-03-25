console.log("student's full name")
//example 1

// collect the element

let btnscrollby = document.querySelector(".btnscrollby")
btnscrollby.addEventListener("click", function(){
window.scrollBy(100,0)
})


/**
*example 2
*/

//collect the elements 

let btnright = documenyt.querySelector(".btmright")
let btnleft = document.querySelector(".btnleft")

//function to scroll the gallery container
function scrollgallery(Upsplash){
let gallerycontainer = document.querySelector(".gallerycontainer")
gallerycontainer.scrollBy(Upsplash)

// add a click event to each buttons
btnright.addEvenListener("click, function(){
  scrollgallery(600)
                         })
btnleft.addEvenListener("click", function(){
scrollgallery(-600)
})
/**
*example 3
*/

let topcontainer= document.querySelector(".topcontainer")
window.addEventListener("scroll", function(){
let pxTOP = window.scrollY
console.log(pxTop)
if(pxTop>100){
topcontainer.style.display = "block"
else{
topcontainer.style.display = "none"
}
})
})

