const http = require('http');
const express = require('express');

var app = express();

app.get("/", function (req, res, next) {
  return res.send('Hello, World.');
});

app.get("/hoge", function (req, res, next) {
  return res.send('Hello, hoge.');
});

const server = http.createServer(app);
server.listen('3000');
