console.log("Pozdrav")
console.log("Pozdrav")
console.log("Pozdrav")

//Funkce
function pozdrav(){
    console.log("Pozdrav")
}

pozdrav()
pozdrav()
pozdrav()

//2. mozny zapis funkce
let pozdrav2 = function(){
    console.log("Pozdrav")
}

pozdrav2()
pozdrav2()
pozdrav2()

// funkce a parametry

let naDruhou = function(number){
    console.log(number * number)
}

naDruhou(5)
naDruhou(10)
naDruhou(6)


/*
Vytvořte funkci s názvem soucet. Tato funkce bude mít dva parametry num1 a num2. Funkce vždy vypíše do konzole součet dvou čísel, které do funkce pošlete.
*/
let soucet = function(num1, num2){
    console.log(num1 + num2)
}

soucet(1,5)
soucet(10,9)
soucet(-5,2)
