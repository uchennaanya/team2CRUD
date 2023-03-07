const http = require('http');

require('dotenv').config()

const port = process.env.PORT


http.createServer(
    (req, res) => {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write("Hello again! ")
        res.end()
    }
).listen(port, () => console.log("Server extablished! "))
