const http = require('http');
const express = require('express');
const path = require('path');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const Players = require('./schema/Players');

var app = express();
mongoose.connect('mongodb://localhost:27017/jpnt', function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('connected to mongo.');
  }
});

app.use(bodyparser());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get("/", function (req, res, next) {
  return res.render('index', { title: 'Hello, World.' });
});

app.get("/players", function (req, res, next) {
  return res.render('players');
});

app.post("/players", function (req, res, next) {
  var newPlayer = new Players({
    name: req.body.name,
    age: req.body.age
  });
  newPlayer.save((err) => {
    if (err) throw err;
    return res.redirect("/");
  });
});

const server = http.createServer(app);
server.listen('3000');
