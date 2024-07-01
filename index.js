const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save", (req,res)=>{
    const url = "mongodb+srv://anuraggaiwal0:0v0zdSn0ux77Mvbu@cluster0.y7bdqus.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    const client = new MongoClient(url);
    const db = client.db("wn25june24");
    const coll = db.collection("student");
    const record = {"name":req.body.name,"choice":req.body.choice}
    coll.insertOne(record)
    .then(result=>res.send(result))
    .catch(error=>res.send(error));
})

app.listen(9000,()=>{console.log("Ready on @ 9000")});