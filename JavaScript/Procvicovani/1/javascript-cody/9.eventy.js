// let heading = document.querySelector("h1")
// console.log("h1")

// heading.addEventListener("click", function(){
//     console.log("bylo kliknuto")
// })

// heading.addEventListener("mouseleave", function(){
//     console.log("забрать мышь")
// })

// heading.addEventListener("mouseenter", function(){
//     console.log("мышь навела")
// })

/*
V kódu výše jste do proměnné uložili H1. Zkuste nastavit, že pokud se na H1 na stránce klikne, tak se změní obsah textu H1 na text "Nový text". Napovím - použijte textContent, který jsme probírali dříve.
*/

let heading = document.querySelector("h1")
heading.addEventListener("click", function(){
    heading.textContent = "Novy Text"
})
