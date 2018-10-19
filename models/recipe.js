'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('recipe', {
    name: DataTypes.STRING,
    instructions: DataTypes.TEXT,
    cuisine: DataTypes.STRING,
    allergy: DataTypes.STRING
  });
  return Recipe;
};

