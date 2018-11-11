var mongoose = require("mongoose");
var dev_url =
  "mongodb://EmmanuelMaduwuba:festac99@ds159033.mlab.com:59033/project";
var mongoDB = process.env.MONGODB_URI || dev_url;
mongoose.connect(mongoDB);
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

var express = require("express");
var path = require("path");

var product = require("./routes/product.route"); // Imports routes for the products
var app = express();
app.use(express.static("mainPage"));

app.set("views", path.join(__dirname, "mainPage"));
app.set("view engine", "hbs");

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/mainPage/lab2.html");
// });
app.get("/", (req, res) => {
  res.render("index", { title: " Shopping API" });
});

// call express
// define our app using express
var bodyParser = require("body-parser");
var port = process.env.port || 8080;
app.listen(port, () => {
  console.log("Server is up and running on port number " + port);
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/products", product);
