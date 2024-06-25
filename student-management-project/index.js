let httpModule = require("http");

let server = httpModule.createServer((req,res)=>{
    res.write("<h1>Hello World</h1>");
    res.end();
})

server.listen(4500,()=>{
    console.log("Server Listening on port 4500");
})