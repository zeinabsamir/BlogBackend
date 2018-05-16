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

router.get('/:articleId', (req, res, next) => {
  const articleId = req.params.articleId;

  db.Article.findById(articleId).then(article => {
    res.json(article);
    
  });
});

module.exports = router;