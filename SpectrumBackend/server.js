const express = require("express");
require("dotenv").config();
const connect = require("./mongodb");
const App = express();
//const fetchPdf = require('./pdf')

//port
const PORT = process.env.PORT || 3001;

//Middlewares global
App.use(express.json());
App.use(express.urlencoded({ extended: true }));

const connection = connect;

if (process.env.NODE_ENV === "production") {
}

App.get("/", (req, res) => {
  res.status(200).send("Incorrect Path");
});

App.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || 500;
  const message = err.message || SERVER_ERR;
  const data = err.data || null;
  res.status(status).json({
    type: "error",
    message,
    data,
  });
});

//fetchPdf();

//ROUTES
App.use("/user", require("./pages/master/index"));
App.use("/files", require("./pages/files/index"));
//  Listening Server
App.listen(PORT, () => {
  console.log(`Server Started at ${PORT}`);
});

