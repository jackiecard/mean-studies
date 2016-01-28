var fs = require("fs");
var http = require("http");

http.createServer(function(req, resp){
    
    var newFile = fs.createWriteStream("readme_copy.md");
    var fileBytes = req.headers['content-length'];
    var uploadedBytes = 0;
    
    req.on("readable", function(){
        var chunk = null;
        while(null !== (chunk = req.read())){
            newFile.write(chunk);
            uploadedBytes += chunk.length;

            var progress = (uploadedBytes / fileBytes) * 100;
            resp.write("progress: " + parseInt(progress, 10) + "%/n");
        }
    });
    
    req.on("end", function(){
        resp.end();
    });
    
}).listen(8080);
