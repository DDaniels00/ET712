/*console.log("\n------ Example 1: Console Messaging -------")
console.warn("This is a warning message!")
console.error("ERROR!")

console.log("\n------------ example 2: global object of js------")
setTimeout(()=>{
console.log('welcome to node js')
}, 3000)

let count = 0

const timer = setInterval(()=>{
    count +=2
    console.log(`counting =${count} times`)
    if (count ==10 ){
        clearInterval(timer)
    }
}, 2000)
*/

console.log("\n------ Example 3: Modules -----------");
const name = require("./mod");
console.log(name("peter"));
console.log(name.id(12345));
console.log(name.email("peter@qcc.edu"));

console.log("\n------ Example 4: Creating a server -----------");
// Import the http and fs modules
const http = require("http");
const fs = require("fs"); // File system module

// Create server
const server = http.createServer((request, response) => {
    // Log the request URL
    console.log(request.url);

    // Send the response
    response.writeHead(200, { "Content-Type": "text/html" });

    // Create a read stream for the index.html file
    const filePath = __dirname + "/index.html";
    fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
            response.end("<h1>404: File Not Found</h1>");
        } else {
            const readStream = fs.createReadStream(filePath);
            readStream.pipe(response);
        }
    });
});

// Server listening on port 3000
server.listen(3000, function () {
    console.log("Server is running on port 3000");
});
