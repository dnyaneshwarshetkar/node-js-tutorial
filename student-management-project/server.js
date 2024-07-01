var express = require("express");
var studentRoute = require("./students-route");

var bodyParser = require("body-parser");
var cors = require('cors')


var app = express();

app.use(express.static("public"))

app.use(cors())

app.use(bodyParser.json());


app.use("/students",studentRoute);


app.listen(4501, ()=>{
    console.log("Server Started");
})