const express = require('express');
const app = express();
const port = 8080;
app.get('/', function(request,response){
    response.send("Hello world from express");
});

app.listen(port,function(){
    console.log("server listen on http://localhost:"+port);
});