var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var multer = require("multer");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "images", "news"));
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});
var upload = multer({ storage: storage });

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var newsRouter = require("./routes/news");
const News = require("./models/news");
mongoose.connect(
  "mongodb+srv://admin:s80BaT6V35Xlz4Nu@cluster0-e9ypg.mongodb.net/uzeg?retryWrites=true&w=majority",
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  },
  () => {
    console.log("connected to database");
  }
);

var app = express();
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.get("/news/image/:filename", (req, res) => {
  const { filename } = req.params;
  const dirname = path.resolve();
  const fullfilepath = path.join(dirname, "images", "news/" + filename);
  return res.sendFile(fullfilepath);
});
app.get("/images/profile/:filename", (req, res) => {
  const { filename } = req.params;
  const dirname = path.resolve();
  const fullfilepath = path.join(dirname, "images", "profiles/" + filename);
  return res.sendFile(fullfilepath);
});
app.post(
  "/api/photos/upload",
  upload.single("file"),
  function (req, res, next) {
    try {
      res.send(req.file);
    } catch (err) {
      console.log(err);
      res.send(400);
    }
  }
);

app.use("/api/user", usersRouter);
app.use("/api/news", newsRouter);

app.use("/reader", express.static(path.join(__dirname, "reader")));
app.get("/reader/*", function (req, res) {
  return res.sendFile(path.resolve(__dirname, "reader", "index.html"));
});

app.use('/', express.static(path.join(__dirname, "public")));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// app.use(function (req, res, next) {
//   next(createError(404));
// });

app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
