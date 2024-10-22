import express from 'express';
import db from '../database/conn.mjs';
import { ObjectId } from 'mongodb';

const router = express.Router();

// Route to get all 
router.get("/", async (req, res) => {
    let collection = await db.collection("records");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

// Route to get record by id
router.get("/:id", async(req, res) => {
    let collection = await db.collection("records");
    let query = {_id: new ObjectId(req.params.id)};
    let result = await collection.findOne(query); 
})

// Route to create record
router.post("/", async (req, res) => {
    let newDocument = {
        name : req.body.name,
        email : req.body.email,
        mobile: req.body.mobile,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
});


export default router;