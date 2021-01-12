// const http = require('http');
// const fs = require('fs');
const express = require('express');
const path = require('path');

const app = new express();
const ejs = require('ejs');
const mongoose = require('mongoose');


// const homePage = fs.readFileSync('index.html');
// const aboutPage = fs.readFileSync('about.html');
// const contactPage = fs.readFileSync('contact.html');
// const bodyparser = require('body-parser');

const Players = require('./schema/BlogPost');

mongoose.connect('mongodb://localhost:27017/jpnt', function (err) {
  if (err) {
    console.error(err);
  } else {
    console.log('connected to mongo.');
  }
});

// app.use(bodyparser());

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index')
});
app.get('/about', (req, res) => {
  res.render('about')
});
app.get('/contact', (req, res) => {
  res.render('contact')
});
app.get('/post', (req, res) => {
  res.render('post')
});
// app.get("/", function (req, res, next) {
// return res.render('index', { title: 'Hello, World.' });
//   res.render('index');
// });

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
