const { mongo_config } = require("./config/config");

const mongoose = require("mongoose");
const connect = mongoose
  .connect(mongo_config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
    //useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

module.exports = connect;
