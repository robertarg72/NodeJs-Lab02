console.log("Node.js App has been executed!!");

var http = require("http");
var fs = require('fs');
var path = require('path');
var utilsTest = require("./my_modules/utilsTest");

// In this case we need to execute the reference ( use parentheses )
// because the reference we get is a pointer to a function
// here we have the chance to pass the "options" object
var utils = require("./my_modules/stringManipulation")({separator: "@", fileLibrary: fs});

// Global variables
var host = "127.0.0.1";
var port = 8000;
var headers =   { 
                    "Content-Type": "text/plain", 
                    "a": "1",
                    "b": "2"
                };
var filename = "package.json";
var message = "Hello Robert 3 !!!";
var counter = 0;
var responseCode = 200;

// Using first library that only uses Module.Exports
message = utilsTest.getCourseName() + "<br >" + utilsTest.getProfessorName();
 
// Using the second module that only exports a constructor
message = utils.append("ccc1", "ddd1");
message = utils.SimpleMessage;

utils.readFile(filename, function(err, data){
    if (err) {
        console.log('Error opening file');
    }
    else{
        message = data.toString();
        console.log(message);
    }
});

var server = http.createServer(function (request, response){

    if(request.url == "/") {
        counter = counter + 1;
        message = "Request served " + counter;
        response.writeHead(responseCode, headers);
        response.end(message);
        console.log("Page request");
    }

    if(request.url == "/favicon.ico") {
        headers = { "Content-type": "image/x-icon" };
        
        // Gets the absolute path to the favicon image file
        var faviconPath = path.join(__dirname, "public", 'favicon.ico');

        // Read the image and add it to the response
        // pipe() calls response.end()
        // Favicon resource is sent, so the Browser can save it in cache
        // This way there will be no more Favicon Requests
        fs.createReadStream(faviconPath).pipe(response);
        console.log("Favicon request");
    }

    
})

server.listen(port, host);
console.log("Server listening at 127.0.0.1:8000 ...");

