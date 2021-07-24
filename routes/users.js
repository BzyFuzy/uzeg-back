const express = require("express"),
  User = require("../models/user"),
  router = express.Router(),
  auth = require("../auths/auth");

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

router.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = await user.generateAuthToken();
    res.json({ status: "success", result: { user, token } });
  } catch (error) {
    if (error.code === 11000 && error.keyPattern.email) {
      res.json({
        status: "failed",
        result: { status: 3, msg: "email already in use" },
      });
    } else {
      res.json({ status: "failed", result: error });
    }
  }
});

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(req.body);
    const user = await User.findByCredentials(username, password);
    if (!user) {
      return res.json({
        status: "failed",
        error: "Login failed! Check authentication credentials",
      });
    }
    const token = await user.generateAuthToken();
    res.json({ status: "amjilttai", result: { user, token } });
  } catch (error) {
    console.log(error);
    return res.json({ status: "aldaa", result: "Please Try Again" });
  }
});

router.get("/me", auth, (req, res) => {
  res.json({ status: 1, result: req.user });
});

router.get("/me/logout", auth, async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return token.token != req.token;
    });
    await req.user.save();
    res.send();
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/me/logoutall", auth, async (req, res) => {
  try {
    req.user.tokens.splice(0, req.user.tokens.length);
    await req.user.save();
    res.json({ status: 1, result: "logged-out" });
  } catch (error) {
    res.json({ status: 0, result: "failed" });
  }
});

/* 002 - start */

router.get("/get/journalist", async (req, res) => {
  try {
    User.find({ role: "journalist" })
      .select({ username: 1, email: 1, created: 1 })
      .exec((err, result) => {
        if (!err) {
          res.json({ status: "amjilttai", result });
        } else {
          res.json({ status: "failed", result: "002-001" });
        }
      });
  } catch (error) {
    res.json({ status: 0, result: "failed" });
  }
});

/* 002 - end */

module.exports = router;
