// TODO: check how this code manages optional parameters and try to use something similar for stringManipulation.js
// function connect(hostname, options) {  
//     var options = options || {};
//     var port = options.port || 80;
//     var method = options.method || "GET";
// }
// connect("www.example.com", { port: 8080, method: "POST" });  
// connect("www.google.com"); 
// End TODO

//objects
//   var Person = function() {}
  
//     var gary = new Person();
  
//     console.log(typeof(gary)); // "object"
//     gary instanceof Person // true
  
//     //literals
//     var str = 'hello world';
//     console.log(typeof(str)); // "string"
//     str instanceof String // False
  
//     var str1 = new String('hello world');
//     console.log(typeof(str1)) // "object"
//     str1 instanceof String // true 
    
//   So in JavaScript, given that strings can be literals or objects, the correct way to test for a string would be to test against both cases.
  
    
//     function isString(str) {
//       return typeof(str) == 'string' || str instanceof String;
//     }

var defaultSeparator = ",";
var separator;
var fileLibrary;
var message;

function checkOptions(options) {
    if(options === undefined || options.separator === undefined) {
        separator = defaultSeparator;;
    }else {
        separator = options.separator;
    }

    if(options !== undefined && options.fileLibrary !== undefined) {
        fileLibrary = options.fileLibrary;
    }
}

function init(options) {
    checkOptions(options);
    function StringManinpulation() {
    }

    var manipulation = new StringManinpulation();

    manipulation.append = function(targetString, stringToAppended) {
        return targetString = targetString + separator + stringToAppended;
    }   
    manipulation.SimpleMessage = 'Hello world';
    
    manipulation.isString = function(str) {
      return typeof(str) == 'string' || str instanceof String;
    }

    manipulation.readFile = function(filename, callbackFn) {
        if( fileLibrary && filename) {
            fileLibrary.readFile (filename, 'utf8', callbackFn);
        }
    }

    return manipulation;
}


module.exports = init;
