const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
  db.Comment.findAll().then((comments) => {
    res.json(comments);
  });
});

router.post('/', (req, res, next) => {
  const articleId = req.articleId;
  const comment = req.body;

  // Check sequelize docs
  db.Article.findById(articleId).then(article => {
    article.createComment({ content: comment }).then(comment => {
       
      res.json(comment);
          })
    
     });
});

module.exports = router;