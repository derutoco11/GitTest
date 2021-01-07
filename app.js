const http = require('http');
const express = require('express');

var app = express();

app.use(function (req, res, next) {
  return res.send('Hello, World.');
});

const server = http.createServer(app);
server.listen('3000');
