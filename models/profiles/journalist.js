const mongoose = require("mongoose");

const jProfileSchema = mongoose.Schema({
  profilePic: { type: String },
  fullname: { type: String },
  bio: { type: String },
  experience: { type: String },
  position: { type: String },
  organization: { type: String },
  created: { type: Date, default: Date.now },
});

const JProfile = mongoose.model("JProfile", jProfileSchema);

module.exports = JProfile;
