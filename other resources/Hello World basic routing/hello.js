const http = require('http');
var routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end("you are viewing home page!");
    },
    '/login': function login(request, response) {
        response.writeHead(200);
        response.end("you are viewing login page!");
    },
    '/signup': function login(request, response) {
        response.writeHead(200);
        response.end("you are viewing signup page!");
    },
    '/forgot-password': function login(request, response) {
        response.writeHead(200);
        response.end("you are viewing forgot-password page!");
    }
}


http.createServer(function (request, response) {
    if(request.url in routes){
        return routes[request.url](request,response);
    }
    response.writeHead(200);
    response.end(http.STATUS_CODES[404]);
}).listen(8008);
