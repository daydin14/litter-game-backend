require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const PORT = process.env.PORT;
const app = express();