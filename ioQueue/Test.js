setTimeout(() => console.log("this is setTimeout 1"))
setImmediate(() => console.log("this is setImmediate 1"))
for (let i = 0; i < 2000000000; i++){}