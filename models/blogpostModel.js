const mongoose = require("mongoose");
const { Schema } = mongoose;
mongoose.Promise = global.Promise;

const blogpostsSchema = new Schema({
    title: String,
    description: String,
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.models.BlogPost || mongoose.model("BlogPost", blogpostsSchema);