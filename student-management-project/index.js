let httpModule = require("http");

let fsModule = require("fs");

let server = httpModule.createServer((req,res)=>{

    if(req.method === "POST" && req.url === "/students"){

        let chunkArray = [];
        req.on("data",(chunk)=>{
            chunkArray.push(chunk);
        })

        req.on("end", ()=>{
            console.log(chunkArray);
            let studentBuff = Buffer.concat(chunkArray);
            let studentObj = studentBuff.toString();
            fsModule.readFile("./students.json",(err,fileData)=>{
                console.log(fileData);
                fileData = fileData.toString();
                let fileDataJSArray = JSON.parse(fileData);
                let studentJSObj = JSON.parse(studentObj);
                studentJSObj.id = (Math.random() * 10000).toFixed(0);
                fileDataJSArray.push(studentJSObj);
                console.log(fileDataJSArray);
                fsModule.writeFile("./students.json",JSON.stringify(fileDataJSArray),()=>{
                    res.writeHead(201,{
                        "Content-Type": "application/json"
                    })
                    res.write(JSON.stringify({
                        message: "Student Created Successfully"
                    }));
                    res.end();
                })
            });
            
        })
    } else if(req.method === "GET" && req.url.includes("/students/")){
        let urlArray = req.url.split("/")
        let id = urlArray[2];
        fsModule.readFile("./students.json",(err,data)=>{
            let students = JSON.parse(data.toString());
            let studentsObj = students.find(single=>{
                return single.id == id;
            })
            res.writeHead(200, {
                "ContentType": "application/json"
            })
            res.write(JSON.stringify(studentsObj));
            res.end();
        })

    }else if(req.method === "GET" && req.url === "/students"){
        fsModule.readFile("./students.json",function(err,data){
            if(err){
                return;
            }
            console.log(data);
            res.writeHead(200,{
                "Content-Type": "application/json"
            })
            res.write(data);
            res.end();
        })
    } else if(req.method === "PATCH" && req.url.includes("/students")){
        let urlArray = req.url.split("/")
        let id = urlArray[2];
        let studentChunkArray = [];
        req.on("data",(chunk)=>{
            studentChunkArray.push(chunk);
        })
        req.on("end",()=>{
            let buff = Buffer.concat(studentChunkArray);
            let studentData = buff.toString();
            console.log(studentData);
            fsModule.readFile("./students.json",(err,data)=>{
                console.log(data);
                let students = JSON.parse(data.toString(""));
                let studentObj = students.find(single=>{
                    return single.id == id;
                })
                console.log(studentObj);
                Object.assign(studentObj, JSON.parse(studentData));
                fsModule.writeFile("./students.json",JSON.stringify(students),()=>{
                    res.writeHead(201,{
                        "Content-Type": "text/html"
                    })
                    res.write("<h1>Student Updated Successfully</h1>");
                    res.end();
                })
            })
        })
        
    } else if(req.method === "DELETE" && req.url.includes("/students/")){
        let urlArray = req.url.split("/")
        let id = urlArray[2];
        fsModule.readFile("./students.json", (err,data)=>{
            let students = JSON.parse(data.toString());
            students = students.filter(single=>{
                return single.id !== id;
            })
            fsModule.writeFile("./students.json",JSON.stringify(students),()=>{
                res.write("<h1>Student Deleted Successfully</h1>");
                res.end();
            })
        })
    }  else {
        res.writeHead(404,{
            "Content-Type": "text/html"
        })
        res.write("<h1 style='color:red'>Page Not Found</h1>");
        res.end();
    }
})

server.listen(4500,()=>{
    console.log("Server Listening on port 4500");
})