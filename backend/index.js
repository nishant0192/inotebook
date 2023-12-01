const connectTOMongo = require("./db");
const { body, validationResult } = require("express-validator");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

connectTOMongo();
// console.log("MONGODB_URL:", process.env.MONGODB_URL);
const app = express();
const port = process.env.PORT || 5000;
console.log("PORT:", process.env.PORT);

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`iNoteBook backend listening on port ${port}`);
});
