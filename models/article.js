'use strict';
module.exports = (sequelize, DataTypes) => {
  var Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  Article.hasMany(models.Comment)
  };
  return Article;
};