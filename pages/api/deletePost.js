import { connectToDatabase } from "../../util/mongodb";
const BlogPost  = require("../../models/blogpostModel");
var mongoose = require('mongoose');

function handleError(err) {
    res.json(err);
        res.status(405).end();
        return resolve();
}

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const bposts = db.collection("blogposts");
    console.log(req.body)
    const id = mongoose.Types.ObjectId(req.body.mid);
    const result = await bposts.deleteOne({ _id: id }, function(err) {
        if (err) return handleError(err);
        console.log(`1 post was deleted with the _id: ${id}`);
        console.log(JSON.stringify(result));
    });
    res.status(200).end();
};