var http = require("http");
var q = require("q");

var server = http.createServer(function (req, res) {
    handleRequest(req).then(function (response) {
        res.writeHead(response.status, response.headers);
        res.end(response.content);
    }, function (error) {
        console.error(error);
        res.writeHead(500, {"Content-Type": "text/plain"});
        res.end("InternalServer Error");
    });
});

server.listen(3000);