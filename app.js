const http = require('http');
const express = require('express');
const path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get("/", function (req, res, next) {
  return res.send('Hello, World.');
});

app.get("/hoge", function (req, res, next) {
  return res.send('Hello, hoge.');
});

const server = http.createServer(app);
server.listen('3000');
