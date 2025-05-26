const http = require("node:http")

const server = http.createServer((req, res) => {
    const superHero = {
        firstname: "Oluwaseun",
        lastName: "Osinowo",
    };

    res.writeHead(200, {"content-type": "application/json"});
    res.end(JSON.stringify(superHero))
    
})

server.listen(3000, () => {
        console.log("Server running on port 3000")
    })
