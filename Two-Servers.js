// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT1 = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest2(request, response) {
    console.log(request)
    // Send the below string to the client when the user visits the PORT URL
    response.end("Your better smarter and gosh darn it people love you: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server.listen(PORT1, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT1);
});
function handleRequest(request, response) {
    console.log(request)
    // Send the below string to the client when the user visits the PORT URL
    response.end("Why are there holes in my belt. I told you I don't want any holes in my belt!!: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT2, function () {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
});
// server.listen(PORT2, function () {

//     // Log (server-side) when our server has started
//     console.log("Server listening on: http://localhost:" + PORT2);
// });