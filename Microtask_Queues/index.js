// console.log("console.log 1")
// process.nextTick(() => console.log("this is process.next 1"))
// console.log("console.log 2")

Promise.resolve().then(() => console.log("this is promise .next 1"))
promise.nextTick(() => console.log("this is prmise.next 1"))