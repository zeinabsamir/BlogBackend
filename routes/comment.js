const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/:commentId', (req, res, next) => {
  const commentId = req.params.commentId;
  
  // Check sequelize docs
  db.Comment.findById(commentId).then(comment => {
    res.json(comment);
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


  const commentId = req.params.commentId;
  
  // Check sequelize docs
  db.Comment.findById(commentId).then(comment => {
    comment.destroy();
    res.json({ status: "success" });
  })
});

router.put('/:commentId', (req, res, next) => {
  const commentId = req.params.commentId;
  const comment = req.body;

  // Check sequelize docs
  db.Comment.update(comment, {where: {id: commentId}}).then(() => {
    db.Comment.findById(commentId).then((comment) => {
      res.json(comment);
    });
  });
});

module.exports = router;