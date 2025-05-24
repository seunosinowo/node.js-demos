const EventEmitter = require("node:events")

//instantiate the class
const emitter = new EventEmitter()


//emitter.on (emitter called)

emitter.on("order-pizza", (size, topping) => {
    console.log(`Order received, Baking a ${size} pizza with ${topping}`);
});

emitter.on("order-pizza", (size) => {
    if(size == "large"){
        console.log("Serving complementary drink")
    }
})

console.log("Do work before event occur in the system")

emitter.emit("order-pizza", "large", "mushroom")