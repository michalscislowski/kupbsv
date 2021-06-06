import { connectToDatabase } from "../../util/mongodb";
const BlogPost  = require("../../models/blogpostModel");

export default async (req, res) => {
    const { db } = await connectToDatabase();
    const bposts = db.collection("blogposts");
    // create a document to be inserted
    console.log(req.body)
    const title = req.body.title;
    const description = req.body.description;
    const date = req.body.date;
    let newBlogPost = new BlogPost({
        title,
        description,
        date
    });
    const result = await bposts.insertOne(newBlogPost);

    console.log(
        `${result.insertedCount} post was inserted with the _id: ${result.insertedId}`,
    );
    res.status(200).end();
};
