const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', (req, res, next) => {
  db.Comment.findAll().then((comments) => {
    res.json(comments);
  });
});


module.exports = router;