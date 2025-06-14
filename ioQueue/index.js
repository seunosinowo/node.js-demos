const fs = require("fs")

fs.readFile(__filename, () => {
    console.log("this is read File 1")
})

process.nextTick(() => console.log("this is process.next tick 1"))
Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
setTimeout(() => console.log("this is setTimeout 1"), 0)

for (i = 0; i < 20000000; i++) {}