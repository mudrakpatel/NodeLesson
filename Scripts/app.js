/**
Require statements
 */

var http = require("http");
var fs = require("fs");
/**
 * Other variables
 */
var readStream = fs.createReadStream('', );
/**
 * http server code
 */
var server = http.createServer((request, response) => {
    respowriteHead(200, { 'Content-Type': 'text/html' });

}).listen(3000);