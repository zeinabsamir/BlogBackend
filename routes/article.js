const express = require('express');
const router = express.Router();
const comments = require('./comment');
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
router.delete('/:articleId', (req, res, next) => {
  const articleId = req.params.articleId;
  
  // Check sequelize docs
  db.Article.destroy({
    where: {id: articleId},
  }).then(() => {
    db.Article.findAll().then((article) => {
      res.json(article);
    });
  });
});

router.put('/:articleId', (req, res, next) => {
  const articleId = req.params.articleId;
  const article = req.body;

  // Check sequelize docs
  db.Article.update(article, {where: {id: articleId}}).then(() => {
    db.Article.findById(articleId).then((article) => {
      res.json(article);
    });
  });
});

router.use('/:articleId/comments',function(req, res, next) {
  req.articleId = req.params.articleId;
  next()
}, comments)

module.exports = router;