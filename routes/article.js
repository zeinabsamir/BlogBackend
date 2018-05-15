const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
  db.Post.findAll().then((posts) => {
    res.json(posts);
  });
});

router.post('/', (req, res, next) => {
  const post = req.body;

  // Check sequelize docs
  db.Post.create(post).then(createdPost => {
    res.json(createdPost);
  });
});

