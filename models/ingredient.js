'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define('ingredient', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
  });
  return Ingredient;
};