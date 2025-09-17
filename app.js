const serverless = require("serverless-http");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("say hello from exterieur!!!");
});

module.exports.handler = serverless(app);
