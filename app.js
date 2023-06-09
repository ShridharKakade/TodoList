const express = require("express");
const mongoose = require("mongoose");

const app = express();

// conenction to mongodb
mongoose.connect("mongodb://localhost/TodoList", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");



// routes
app.use(require("./routes/index"))
app.use(require("./routes/todo"))


// server configurations....
app.listen(3002, () => console.log("Server started listening on port: 3000"));
