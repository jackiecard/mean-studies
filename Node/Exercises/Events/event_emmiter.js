var http = require("http");

var server = http.createServer();
server.on("request", function(req, resp){
    resp.writeHead(200);
    resp.write("Req1\n");
    resp.end();
});
server.on("request", function(req, resp){
    console.log("req2/n");
});
server.on("close", function(){
    console.log("closing...");
});
server.listen(8080);