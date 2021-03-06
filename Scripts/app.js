var http = require("http");
var fs = require("fs");
var path = require("path");
var express = require("express");
var app = express();
app.use(express.static("../Content"));

http.createServer(function(request, response) {
    fs.readFile("../index.html", "UTF-8", function(error, html) {
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end(html);
    });
}).listen(3000);

console.log("Server running on port 3000");