var http = require("http");

http.createServer(function(req, resp){
    resp.writeHead(200);
    resp.write("Rodando... ");
    setTimeout(function(){
        resp.write("Feshow!");
        resp.end();
    }, 5000);
}).listen(8080);

console.log("Porta 8080 rodando...");