const fs = require("fs");

const readableStream = fs.createReadStream(__filename);
readableStream.close();

readableStream.on("close", () => {
    console.log("this is from readableStream close event callback")
});

setImmediate(() => console.log("this is setImmediate 1"))
setTimeout(() => console.log("this is setTimeout 1"))
Promise.resolve().then(() => console.log("this is Promise.resolve 1"))
process.nextTick(() => console.log("this is process.nextTick 1"))


