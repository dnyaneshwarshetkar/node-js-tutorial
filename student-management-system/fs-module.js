let fsModule = require("fs");

/*fsModule.writeFile("./information.txt", "HelloWorld",()=>{
    console.log("File Created");
});*/

/*fsModule.appendFile("./information.txt", "Ramesh",()=>{
    console.log("Appended");
})*/

/*fsModule.readFile("./information.txt",(err,data)=>{
    console.log(data);
})

console.log("After reading File");*/

/*fsModule.rename("./information.txt", "./new-information.txt",()=>{
    console.log("renamed");
})*/

fsModule.unlink("./new-information.txt",()=>{
    console.log("Deleted");
})

