const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const factSchema = mongoose.Schema({
  brief: { type: String },
  category: { type: String },
  files: [{ type: String }],
  isInstant: { type: Boolean },
  journalist: { type: ObjectId, ref: "JProfile" },
  created: { type: Date, default: Date.now },
});

const Fact = mongoose.model("Fact", factSchema);

module.exports = Fact;
