

// Exercise 1 : Divisible By Three
// Instructions
// let numbers = [123, 8409, 100053, 333333333, 7]
for (const elements of numbers) {
   if (elements %3 == 0) {// Loop through the array above and determine whether or not each number is divisible by three
    console.log(elements)
     console.log("true")// Each time you loop console.log true or false.
   } else {
    console.log(elements)
    console.log("false") // Each time you loop console.log true or false.
   }
    
}

// Prompt the student for their name.

// If the name is in the object, console.log the name of the student and the country they come from.




let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}



const clee = Object.keys(guestList)//je recuperes sous forme de tableau les clées de l'objet guestList
const valeur = Object.values(guestList)//je recuperes sous forme de tableau les valeurs de l'objet guestList
let i=0// initialise i a 0
let nom = prompt("entrez votre nom")// demande a l'utilisateur de rentrer son nom
// Hint: You don’t need to use a for loop, just look up the statement if ... in
//
while (i < clee.length) { 

    if (nom == clee[i] ) {//  le nom est idebtique a une valeur dans le tableau on affiche le message demander 
// For example: "Hi! I'm [name], and I'm from [country]."
      console.log(" hi! I'm "+clee[i]+" and I'm from "+valeur[i])
// If the name is not in the object, console.log: "Hi! I'm a guest."
    } else {console.log("Hi! I'm a guest.")}// si le nom est differents alors on ...
    i++
}



// Exercise 3 : Playing With Numbers
// Instructions
// let age = [20,5,12,43,98,55];
// Requirements : Don’t use built-in Javascript methods to answer the following questions. You have to create the logic by yourself. Use simple for loops.


// 1. Console.log the sum of all the numbers in the age array.
let ages = [20,5,12,43,98,55];
let som = 0
for (const age of ages) {
  som=som + age 
}
console.log(som)

// 2. Console.log the highest age in the array.
let age = [20,5,12,43,98,55];
// nous allons effectuer un tri a bulle decroissant
for (let i = 0; i < age.length; i++) {
    let temp =0//initialisation de la valeur temporraire

    for (let j = 0; j < age.length; j++) {
        if (age[j] < age[j+1]) { //comparaison de l'element de l'index j à l'element de l'index j+1
            temp=age[j]   //temp recoit la valeur a l'indice J du tableau
            age[j]= age[j+1] // la valeur a l'indice J du tableau est remplacer par la suivante plus grande
            age[j+1] = temp   // numbres [j+1] recoit le plus petit element 
                
        }
    }
}
age
console.log("l'age la plus elevée est "+age[0])// le tableau etant trié dans l'ordre decroissangt l'element le plus 
//éléve du tableau se situe a l'index 0
    