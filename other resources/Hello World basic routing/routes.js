var routes = {
    '/': function index(request, response) {
        response.writeHead(200);
        response.end("you are viewing home page!");
    },
    '/login': function login(request, response) {
        response.writeHead(200);
        response.end("you are viewing login page!");
    }
}