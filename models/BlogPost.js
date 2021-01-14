const mongoose = require('mongoose');
const Schema = mongoose.Schema
// const { stringify } = require('querystring');

const BlogPostschema = new Schema({
  title: String,
  body: String
});

const BlogPost = mongoose.model('BlogPost', BlogPostschema);
module.exports = BlogPost
