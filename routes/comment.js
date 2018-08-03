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
    article.createComment( comment).then(comment => {
       
      res.json(comment);
          })
    
     });
});

router.delete('/:commentId', (req, res, next) => {

  const articleId = req.articleId;
  const commentId = req.params.commentId;
  
  // Check sequelize docs
  db.Article.findById(articleId).then(article => {
     article.removeComment(commentId).then(() => {
      article.getComments().then(comments => {
       
        res.json(comments);
      });
    });
  });
});

module.exports = router;