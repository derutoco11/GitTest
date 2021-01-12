const mongoose = require('mongoose');
// const { stringify } = require('querystring');

const BlogPostschema = mongoose.Schema({
  title: String,
  body: String
});

module.exports = mongoose.model('BlogPost', BlogPostschema);
