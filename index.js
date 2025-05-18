// const addFn = require("./add")

// console.log("Hello from Index.js")


//Modules export
// const sum = addFn(2,3)
// const sum1 = addFn(6,4)

// console.log(sum)
// console.log(sum1)

// require("./batman")
// require("./superman")

// const superHero = require("./super-hero")
// console.log(superHero.getName());

// superHero.setName("Superman");
// console.log(superHero.getName())
 
// const newSuperHero = require("./super-hero");
// console.log(newSuperHero.getName());

const SuperHero = require("./super-hero");

const batman = new SuperHero("Batman");
console.log(batman.getName());
batman.setName("Brune David")
console.log(batman.getName())

const superman = new SuperHero("superman");
console.log(superman.getName())

