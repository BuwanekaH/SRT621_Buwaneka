const http = require("http");
const host = 'localhost';
const port = 8989;

const server = http.createServer((req, res) =>{

    res.statusCode = 200;
    res.end();
});
require("http").createServer(function (req,res) {
    res.statusCode = 200;
    res.end(Date.now());
});

server.listen(port, host, () => {
    console.log(`http://${host}:${port}`);
});
