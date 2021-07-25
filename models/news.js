const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const newsSchema = mongoose.Schema({
  brief: { type: String },
  title: { type: String },
  body: { type: String },
  publisher: { type: ObjectId, ref: "User" },
  created: { type: Date, default: Date.now },
});

const News = mongoose.model("News", newsSchema);

module.exports = News;
