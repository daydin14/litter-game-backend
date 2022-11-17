// Initialized Dependencies

const express = require("express");
const bcrypt = require("bcrypt");
const sessionsRouter = express.Router();
const User = require("../models/user");

// New (Login Page)

// Delete (Logout Route)

sessionsRouter.delete("/", (req, res) => {
    req.session.destroy((error) => {
        res.redirect("/");
    });
})

// Create (Login Route)

sessionsRouter.post("/", (req, res) => {
    // Check for an existing user
    User.findOne({
        email: req.body.email
    }, (error, foundUser) => {
        // Send Error Message if no user is found
        if(!foundUser) {
            res.send("Oops! No user with that email address has been registered.");
        } else {
            // If a user has been found
            // Compare the given password with the hash password we have stored
            const passwordMatches = bcrypt.compareSync(req.body.password, foundUser.password);

            // If the passwords match
            if(passwordMatches) {
                // Add the user to our session
                req.session.currentUser = foundUser;

                // Redirect back to our home page
                res.redirect("/");
            } else {
                // If the passwords don't match
                res.send("Oops! Invalid credentials.");
            }
        }
    })
})

// Export Sessions Router

module.exports = sessionsRouter;