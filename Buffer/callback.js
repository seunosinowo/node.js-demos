function greet(name){
    console.log(`Hello ${name}`);
}

function greetSeun(greetFn){
    const name = "Seun";
    greetFn(name);
}

greetSeun(greet);