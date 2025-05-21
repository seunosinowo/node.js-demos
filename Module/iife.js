//Function Expression
//Immediately Invoked Function Expression (IIFE) in Node.js

(function (message){
    const superHero = "Batman";
    console.log(message, superHero)
})("Hello");

(function(message){
    const superHero = "Superman";
    console.log(message, superHero)
})("Hey");

//How we specify parameters and add argument to IIFE