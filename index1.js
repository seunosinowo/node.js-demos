const fs = require("node:fs")

console.log("first")

const fileContent = fs.readFileSync("file.txt", "utf-8")
console.log(fileContent)

console.log("Second")

fs.readFile("file.txt", "utf-8", (error, data) => {
    if(error){
        console.log(error);
    } else {
        console.log(data);
    }
})

console.log("Third")

//Write file
fs.writeFileSync("testing.txt", "Hello World");
fs.writeFileSync("unto.js", "Stillo testing");

fs.writeFile("./testing.txt", " Hello Seun", {flag: "a"}, (err) => {
    if (err){
        console.log(error)
    } else {
        console.log("File Written")
    }
})