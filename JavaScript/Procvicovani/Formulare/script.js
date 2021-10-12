let form = document.querySelector('form')
let notName = document.querySelector(".notificationName")
let notEmail = document.querySelector(".notificationEmail")

console.log(form)
console.log(notName)
console.log(notEmail)

form.addEventListener("submit", function(event){
    event.preventDefault() /*vypina refresh*/
    event.target.elements.fullName.value

if(event.target.elements.fullName.value === ""){
    notName.style.display = "block"
}
if(event.target.elements.email.value === ""){
    notEmail.style.display = "block"
}  
event.target.elements.fullName.value = ""
event.target.elements.email.value = ""

})