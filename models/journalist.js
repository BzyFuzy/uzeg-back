const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const jProfileSchema = mongoose.Schema({
  user: { type: ObjectId, ref: "User" },
  profilePic: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  bio: { type: String },
  experience: { type: String },
  position: { type: String },
  organization: { type: String },
  created: { type: Date, default: Date.now },
});

const JProfile = mongoose.model("JProfile", jProfileSchema);

module.exports = JProfile;
