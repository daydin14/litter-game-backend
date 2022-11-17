// Initialized Dependencies

require("dotenv").config()  // Hidden App Configuration Settings
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const session = require("express-session");
const methodOverride = require("method-override");

const {PORT, DATABASE_URL} = process.env;  // Configures Active PORT App is Running On
const app = express();  // Initialize Express App

// Initialized Controllers

const userController = require("./controllers/users");
const sessionController = require("./controllers/sessions");

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
app.use(express.urlencoded({ extended: true }));    // Body-Parser
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false
}))
app.use(methodOverride("_method"));

// Controller Middleware

app.use("/users", userController);
app.use("/sessions", sessionController);

// Route(s)

// Express App Listener

app.listen(PORT, () => console.log(`express is listening on port : ${PORT}`));