/**
Require statements
 */

var http = require("http");
var fs = require("fs");
/**
 * Use fs' object readFileSync() method to
 * asynchronously serve the index.html file
 * The anonymous callback function takes
 * 2 parameters: error and html
 */
fs.readFileSync('../index.html', function(error, html) {
    if (error) {
        throw error;
    }
    /**
     * http server code
     */
    var server = http.createServer(function(request, response) {
        response.writeHeader(200, { 'Content-Type': 'text/html' });
        response.write(html);
        response.end();
    }).listen(3000);
});