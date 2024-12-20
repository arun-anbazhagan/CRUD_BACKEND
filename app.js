const express = require("express");
const app = express();
var mongoose = require("mongoose");
const userRoutes = require("./routes/router");
var cors = require("cors");
app.use(cors());
app.use(express.json());
var bodyParser = require("body-parser");
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.raw({ type: "/" }));

app.use("/users", userRoutes);

mongoose.connect("mongodb://localhost:27017/crud", {
  useNewurlparser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
console.log("promise: ", mongoose.Promise);
mongoose.Promise = global.Promise;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to database");
});

module.exports = app;