const express = require("express");
const app = express();
const cors = require("cors");

// middlewares

app.use(express.json());
app.use(cors());

// routes

const jobRoute = require('./routes/v1/job.route')

app.use('/api/v1/', jobRoute)

app.get("/", (req, res) => {
  res.send("Route is wroking! YaY!"); 
});



app.use("*", (req, res) => {
  res.status(404).send("Route not found!");
});

module.exports = app;
