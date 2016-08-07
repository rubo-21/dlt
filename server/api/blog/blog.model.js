'use strict';

import mongoose from 'mongoose';

// title, teaser img, teaser description, user who created, category of a post
var BlogSchema = new mongoose.Schema({
  title: String,
  teaser: {
    description: String,
    img: String,
  },
  category: String,
  author: String,
  article: String,
  active: Boolean
});

export default mongoose.model('Blog', BlogSchema);
