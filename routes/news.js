const express = require("express"),
  User = require("../models/user"),
  News = require("../models/news"),
  router = express.Router(),
  auth = require("../auths/auth");

/* 003 - start */

router.post("/", auth, (req, res) => {
  try {
    const newNews = new News(req.body);
    
  } catch (error) {
    res.json({ status: 0, result: "failed" });
  }
});

/* 003 - end */

module.exports = router;
