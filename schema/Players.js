var mongoose = require('mongoose');
const { stringify } = require('querystring');

var Players = mongoose.Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('Players', Players)
