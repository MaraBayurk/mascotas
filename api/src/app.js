const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes/index");

const app = express();

app.name = "MASCOTAS";

app.use(bodyParser.urlencoded({
  extended: true,
  limit: "50mb"
}));
app.use(bodyParser.json({
  limit: "50mb"
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});
app.use(cookieParser());
app.use(cors());
//{ origin: 'http://localhost:3000' , credentials :  true}
app.use(morgan("dev"));

app.use("/",routes)


module.exports = app;