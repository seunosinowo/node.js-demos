const http = require("node:http")
const fs = require("node:fs")

const server = http.createServer((req, res) => {
    // const superHero = {
    //     firstName: "Oluwaseun",
    //     lastName: "Osinowo",
    // };
    const name = "Seun";
    res.writeHead(200, {"Content-Type": "text/html"});
    let html = fs.readFileSync("./index.html", "utf-8")
    html = html.replace("{{name}}", name)
    res.end(html)
    // fs.createReadStream(__dirname + "/index.html").pipe(res)
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})