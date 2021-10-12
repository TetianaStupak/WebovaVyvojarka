/*cyclus FOREACH*/

let employees = ["David", "Martin", "Harry", "Ron", "Dana"]

employees.forEach(function(oneEmployee){
    console.log(oneEmployee)
})

/*
Vytvořte si pole s názvem test, kde budou slova "jedna", "dva", "tři". Zkuste toto pole vypsat do konzole pomocí cyklu forEach 
*/
 let test = ["jedna", "dva", "tri"]

 test.forEach(function(numTest){
     console.log(numTest)
 })

 // === cyklus FOR ===

 for(let i = 0; i <= 5; i = i + 1) {
     console.log(i + " Text")
 }

 /*
Vypište do konzole 10x text:
Pokus číslo: 1
Pokus číslo: 2
Pokus číslo: 3
...
Pokus číslo 10
 
Nápověda - "Pokus číslo: " bude text a k tomu bude připojená proměnná i, která v sobě má v každém cyklu číslo o jedno větší 
*/

for(let i = 0; i < 10; i = i + 1) {
    console.log("pokus cislo: " + (i+1))
}