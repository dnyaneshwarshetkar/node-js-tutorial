let express = require("express");
let dbPromise = require("./database"); 
let {ObjectId} = require("mongodb");

let router = express.Router();

router.get("/", async (req,res)=>{
    let db = await dbPromise;
    let coll = db.collection("students");
    let students = await coll.find({}).toArray();
    students = students.map(single=>{
        single.id = single._id;
        return single;
    })
    res.send(students);
})

router.get("/:id", async(req,res)=>{
    let db = await dbPromise;
    let singleStudent = await db.collection("students").findOne({_id: new ObjectId(req.params.id)});
    singleStudent.id = singleStudent._id;
    res.send(singleStudent);
})

router.post("/", async (req,res)=>{
    let db = await dbPromise;
    let student = await db.collection("students").insertOne(req.body);
    res.send(student);
})

router.delete("/:id", async (req,res)=>{
    let db = await dbPromise;
    let student = await db.collection("students").deleteOne({_id: new ObjectId(req.params.id)});
    res.send(student);
})


router.patch("/:id", async (req,res)=>{
    let db = await dbPromise;
    let student = await db.collection("students").updateOne({_id: new ObjectId(req.params.id)},{$set:req.body});
    res.send(student);
})


module.exports = router;