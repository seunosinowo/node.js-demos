setImmediate(() => console.log("this is setimmediate 1"))
setImmediate(() => {
    console.log("this is setimmediate 2")
    process.nextTick(() => console.log("this is nextTick 1"))
    Promise.resolve().then(() => console.log("this is Promise Resolve 1")) 
})
setImmediate(() => console.log("this is setimmediate 3"))