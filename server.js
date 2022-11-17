// Initialized Dependencies

require("dotenv").config()  // Hidden App Configuration Settings
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const methodOverride = require("method-override");

const {PORT, DATABASE_URL} = process.env;  // Configures Active PORT App is Running On
const app = express();  // Initialize Express App

// Mongo Database Configuration

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;

// Database Connection Error / Success (MONGO Status Listeners)

db.on("error", (err) => console.log(err.message + "is mongod not running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

// Mount Middleware

app.use(cors());
// Controller Middleware

// Route(s)

// Express App Listener

app.listen(PORT, () => console.log(`express is listening on port : ${PORT}`));