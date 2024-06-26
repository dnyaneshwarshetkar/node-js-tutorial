let httpModule = require("http");
let url = require("url");

let server = httpModule.createServer((req,res)=>{

    if(req.method === "POST" && req.url === "/students"){
        res.write("<h1>POST Method Create Students</h1>");
        res.end();
    } else if(req.method === "GET" && req.url === "/students"){
        res.write("<h1>GET METHOD Get Students</h1>");
        res.end();
    } else if(req.method === "PATCH" && req.url === "/students/abc"){
        res.write("<h1>PATCH METHOD Update Student</h1>");
        res.end();
    } else if(req.method === "DELETE" && req.url === "/students/abc"){
        res.write("<h1>DELETE METHOD Delete Student</h1>");
        res.end();
    } else if(req.method === "PUT" && req.url === "/students/abc"){
        res.write("<h1>PUT METHOD Method Replace Student</h1>");
        res.end();
    } else {
        res.write("<h1>Default Response</h1>");
        res.end();
    }
})

server.listen(4500,()=>{
    console.log("Server Listening on port 4500");
})