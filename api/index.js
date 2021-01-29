const express = require('express')
const app = express.app

app.get('/', function(req, res) {
  res.send("You\'re not supposed to be here silly!'")
})