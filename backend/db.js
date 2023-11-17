const mongoose = require("mongoose");
const mongoUri = "mongodb://localhost:27017/inotebook";

const connectTOMongo = () => {
  mongoose.connect(mongoUri);
  console.log("hi");
};

module.exports = connectTOMongo;
