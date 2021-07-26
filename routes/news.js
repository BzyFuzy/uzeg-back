const express = require("express"),
  User = require("../models/user"),
  News = require("../models/news"),
  router = express.Router(),
  auth = require("../auths/auth");

/* 003 - start */

router.post("/", auth, (req, res) => {
  try {
    let news = {
      ...req.body,
      category: req.body.category.toLowerCase(),
      publisher: req.user._id,
    };
    const newNews = new News(news);
    newNews.save((err, result) => {
      if (!err) {
        res.json({ status: "amjilttai", result });
      } else {
        res.json({ status: 0, result: "failed 3-0-2" });
      }
    });
  } catch (error) {
    res.json({ status: 0, result: "failed 3-0-1" });
  }
});

router.get("/", auth, (req, res) => {
  try {
    console.log(req.user._id)
    News.find({ publisher: req.user._id }).exec((err, result) => {
      if (!err) {
        res.json({ status: "amjilttai", result });
      } else {
        res.json({ status: 0, result: "failed 3-1-2" });
      }
    });
  } catch (error) {
    res.json({ status: 0, result: "failed 3-1-1" });
  }
});

/* 003 - end */

module.exports = router;
