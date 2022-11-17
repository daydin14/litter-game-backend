// Initialized Dependencies

const bcrypt = require("bcrypt");
const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");

// New (Registration Page)

// Create (Registration Route)

userRouter.post("/", (req, res) => {
    // Overwrite the user password with the hash password, then pass that into our database
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    User.create(req.body, (error, createdUser) => {
        res.redirect("/");
    })
})

// Export User Router

module.exports = userRouter;