const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const assert = require("assert");
const MongoUrl = "mongodb://localhost:27017/DataBaseglpi";
// const Contact = require("./routes/Contact");
const Reserve = require ("./routes/Reserve");
const Ticket = require ("./routes/Ticket");
// const passport = require("passport");
// const users = require("./routes/users");
const Contact = require("./routes/Contact");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use(passport.initialize());
// require("./config/passport")(passport);

mongoose
  .connect(MongoUrl, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.use(Contact);
app.use(Reserve);
app.use(Ticket);

app.listen(5000, err => {
  if (err) console.log("connection to server failed");
  console.log("connected on port 3000");
});
