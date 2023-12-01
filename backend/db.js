const mongoose = require("mongoose");
const mongoUri = "mongodb+srv://nishantgolakiya2001:OEIQonQDfLsjp5OE@inotebook.kjn10kj.mongodb.net/?retryWrites=true&w=majority";

const connectTOMongo = () => {
  mongoose.connect(mongoUri);
  console.log("hi");
};

module.exports = connectTOMongo;
