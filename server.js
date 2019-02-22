require('dotenv').config()

var express = require("express");
var app = express();
var path = require("path");

var PORT = process.env.PORT || 8080;


app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});

