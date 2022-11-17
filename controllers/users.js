// Initialized Dependencies

const bcrypt = require("bcrypt");
const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");

// Export User Router

module.exports = userRouter;