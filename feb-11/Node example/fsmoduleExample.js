var fileSys = require('fs');
//http module is used to create an httpserver
var http = require('http');
http.createServer(function(req,res){
    fileSys.readFile('student.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(4545);
console.log("server running on port 4545");
