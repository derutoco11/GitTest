const http = require('http');
// const fs = require('fs');
const ejs = require('ejs');
const path = require('path');
const express = require('express');

// const homePage = fs.readFileSync('index.html');
// const aboutPage = fs.readFileSync('about.html');
// const contactPage = fs.readFileSync('contact.html');
// const bodyparser = require('body-parser');
// const mongoose = require('mongoose');

// const Players = require('./schema/Players');

const app = express();
// mongoose.connect('mongodb://localhost:27017/jpnt', function (err) {
//   if (err) {
//     console.error(err);
//   } else {
//     console.log('connected to mongo.');
//   }
// });

// app.use(bodyparser());

// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", function (req, res, next) {
  // return res.render('index', { title: 'Hello, World.' });
  res.render('index');
});

// app.get("/players", function (req, res, next) {
//   return res.render('players');
// });

// app.post("/players", function (req, res, next) {
//   var newPlayer = new Players({
//     name: req.body.name,
//     age: req.body.age
//   });
//   newPlayer.save((err) => {
//     if (err) throw err;
//     return res.redirect("/");
//   });
// });

// const server = http.createServer(app);
// const server = http.createServer((req, res) => {
//   if (req.url === '/about') {
//     res.end(aboutPage)
//   } else if (req.url === '/contact') {
//     res.end(contactPage)
//   } else if (req.url === '/') {
//     res.end(homePage)
//   } else {
//     res.writeHead(404)
//     res.end('page not found')
//   }
// });
app.listen(3000, () => {
  console.log('App listening on port 3000.')
});
