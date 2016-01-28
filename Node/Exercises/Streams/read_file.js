var fs = require("fs");
var http = require("http");

http.createServer(function(req, resp){
    
    var newFile = fs.createWriteStream("readme_copy.md");
    req.pipe(newFile);
    
    req.on('end', function(){
        resp.end("Uploaded!");
    });
    
}).listen(8080);