const https = require("node:https")

const MAX_CALL = 1;

const start = Date.now()

for (i = 0; i < MAX_CALL; i++){
    https
        .request("https://www.google.com", (res) => {
            res.on("data", () => {});
            res.on("end", () => {
                console.log(`Request: ${i + 1}`, Date.now() - start)
            })
        })
        .end();
}