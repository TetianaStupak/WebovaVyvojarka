let newParagraph = document.createElement("p")
newParagraph.textContent = "Novy text"
console.log(newParagraph)

let resultClass = document.querySelector(".result")

resultClass.appendChild(newParagraph )