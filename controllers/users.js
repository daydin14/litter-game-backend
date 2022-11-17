// Initialized Dependencies

const express = require("express");
const bcrypt = require("bcrypt");
const userRouter = express.Router();
const User = require("../models/user");

// New (Registration Page)

userRouter.get("/new", (req, res) => {
    res.render("users/new.ejs", {
        currentUser: req.session.currentUser
    });
});

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