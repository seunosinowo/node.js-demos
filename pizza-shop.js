// class PizzaShop {
//     constructor() {
//         this.orderNumber = 0;
//     }

const { EventEmitter } = require("stream");

//     order() {
//         this.orderNumber ++;
//     }

//     displayOrderNumber() {
//         console.log(`Current order number: ${this.orderNumber}`)
//     }
// }

// module.exports = PizzaShop;

class PizzaShop extends EventEmitter {
    constructor() {
        super();
        this.orderNumber = 0;
    }

    order(size, topping) {
        this.emit("order", size, topping);
    }

    displayOrderNumber() {
        console.log(`Current order number: ${this.orderNumber}`)
    }
}

module.exports = PizzaShop;