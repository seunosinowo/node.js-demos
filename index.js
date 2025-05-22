const path = require("node:path")

console.log(__dirname)
console.log(__filename)

console.log(path.basename(__dirname))
console.log(path.basename(__filename))

//extname (extension name)
console.log(path.extname(__dirname))
console.log(path.extname(__filename))

//Parse (Component Parse)
console.log(path.parse(__dirname))
console.log(path.parse(__filename))

console.log(path.format(path.parse(__filename)))

console.log(path.isAbsolute(__dirname))
console.log(path.isAbsolute(__filename))

console.log(path.isAbsolute("./data.json"))

console.log("")

//Path Join
console.log(path.join("folder1", "folder2", "index.html"))
console.log(path.join("/folder1", "folder2", "index.html"))
console.log(path.join("/folder1", "//folder2", "index.html"))
console.log(path.join("/folder1", "//folder2", "..index.html"))
console.log(path.join(__dirname, "data.json"))

console.log("")

console.log(path.resolve("folder1", "folder2", "index.html"))
console.log(path.resolve("/folder1", "folder2", "index.html"))
console.log(path.resolve("/folder1", "//folder2", "index.html"))
console.log(path.resolve("/folder1", "//folder2", "..index.html"))
console.log(path.resolve(__dirname, "data.json"))