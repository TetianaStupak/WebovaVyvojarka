let age = 25

if(age >= 18){
    console.log("je dospely")
} else {
    console.log("neni dospely")
}

let city = "Praha"

if(city === "Praha") {
    console.log("Žije v Praze")
}else {
    console.log("Nežije v Praze")
}

//firstName muze mit hodnotu David, Pavel, Petr

let firstName = "David"

if(firstName === "David") {
    console.log("Ahoj, Davide")
} else if (firstName === "Pavel") {
    console.log("Ahoj, Pavle")
} else {
    console.log("nemuzes vstoupit")
}

//logicke operatory

let myName = "David"
let height = 180

if(myName === "David" && height === 180){
    console.log("Jmenuje se David a meri 180 cm")
} else {
    console.log("false")
}

if(myName === "David" || height === 180){
    console.log("Jmenuje se David a meri 180 cm")
} else {
    console.log("false")
}

/* a zároveň
true = true + true
false = true + false
false = false + true
false = false + false
*/

/* nebo
true = true + true
true = true + false
true = false + true
false = false + false
*/

/*
Vytvořte proměnnou password (heslo). Tato proměnná může nabývat 3 hodnot: 5623, 4887 a 1901. Pokud zadané heslo odpovídá jednomu z těchto tří čísel, tak se do konzole vypíše text "Dobrý den, můžete vstoupit". Pokud neodpovídá, tak se vypíše do konzole text "Zadali jste neplatný kód".
1. zapište kód jen pomocí if, else if a else
2. zapište kód pomocí logického operátoru ||
*/

let password = 5623

if(password === 5623 || password === 4887 || password === 1901) {
    console.log("Dobrý den, můžete vstoupit")
} else {
    console.log("Zadali jste neplatný kód")
}

if(password === 5623) {
    console.log("Dobrý den, můžete vstoupit")
} else if(password === 4887) {
    console.log("Dobrý den, můžete vstoupit")
} else if(password === 1901) {
    console.log("Dobrý den, můžete vstoupit")
}  else {
    console.log("Zadali jste neplatný kód")
}

