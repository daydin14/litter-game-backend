// Dependencies

require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const PORT = process.env.PORT;
const app = express();

// Database Configuration

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

// Database Connection Error / Success

db.on("error", (err) => console.log(err.message + "is mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// App Listener

app.listen(PORT, () => console.log(`express is listening on port : ${PORT}`));