
let nadpis = document.querySelector("h1")
console.log(nadpis)

//nadpis.textContent = "Novy text"

//nadpis.style.fontSize = "100px"
//nadpis.style.color = "blue"

nadpis.addEventListener("click", function() {
    nadpis.style.color = "blue"
})
nadpis.addEventListener("mouseover", function() {
    nadpis.style.color = "green"
})
nadpis.addEventListener("mouseleave", function() {
    nadpis.style.background = "yellow"
})

let obrazek = document.querySelector("img")
obrazek.addEventListener("click", function (){
    obrazek.src = "img/logo.png"
})