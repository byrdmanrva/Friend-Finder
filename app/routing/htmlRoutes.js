var express = require("express");
var app = express();
var path = require("path");
var http = require("http");
var fs = require("fs");

var PORT = process.env.PORT || 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;

    switch (path) {
        case "/":
        return displayHome(path, req, res);
    }
}

function displayHome(url, req, res) {
    fs.readFile(path.join(__dirname , "../public/home.html"), function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html"})
        res.end(data)
    });
}


server.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});