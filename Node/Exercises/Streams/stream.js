var http = require("http");

http.createServer(function(req, resp){
    resp.writeHead(200);
    req.on("readable", function(){
        var chunk = null;
        while(null !== (chunk = req.read())){
            console.log(chunk.toString());
        }
    });
    req.on("end", function(){
        resp.end();
    });
}).listen(8080);