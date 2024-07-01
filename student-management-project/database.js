var mongodb = require("mongodb");

var url = "mongodb://localhost:27017";

var client = new mongodb.MongoClient(url);

async function database(){
    let conn = await client.connect();

    let db = conn.db("studentManagement");

    return db;
}

module.exports = database();