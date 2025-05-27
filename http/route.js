const http = require("node:http")

const server = http.createServer((req, res) => {
    // res.end(req.url)

    if(req.url === "/"){
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("Home Page");
    }else if(req.url === "/about"){
        res.writeHead(200, {"content-type": "text/plain"});
        res.end("About Us");
    }else if(req.url === "/api"){
        res.writeHead(200, {"content-type": "application/json"});
        res.end(
            JSON.stringify({
                firstName: "Oluwaseun",
                lastName: "Osinowo",
            })
        )
    }else{
        res.writeHead(404);
        res.end("Page not found")
    }
})

server.listen(3000, () => {
    console.log("Server running on port 3000")
})