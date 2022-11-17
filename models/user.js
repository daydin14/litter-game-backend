// Initialized Dependencies

const mongoose = require("mongoose");

// User Schema

const userSchema = new mongoose.Schema({
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true }
});

// User Model

const User = mongoose.model("User", userSchema);

// Export User Model

module.exports = User;