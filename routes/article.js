const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
  db.Article.findAll().then((articles) => {
    res.json(articles);
  });
});

router.post('/', (req, res, next) => {
  const article = req.body;

  // Check sequelize docs
  db.Article.create(article).then(createdArticle => {
    res.json(createdArticle);
  });
});

module.exports = router;