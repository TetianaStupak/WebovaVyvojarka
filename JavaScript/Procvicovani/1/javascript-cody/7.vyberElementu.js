
let heading = document.querySelector("h1")
    console.log(heading)

let paragraphID = document.querySelector("#david")
    console.log(paragraphID)

let paragraph = document.querySelector("p")
    console.log(paragraph)

let allParagraphs = document.querySelectorAll("p")
console.log(allParagraphs[0])
console.log(allParagraphs[1])
console.log(allParagraphs[2])

/*
Vypište všechny odstavce v proměnné allParagraphs pomocí cyklu forEach
*/
allParagraphs.forEach(function(oneParagraph){
    console.log(oneParagraph)
})

