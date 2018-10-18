'use strict';
module.exports = function(sequelize, DataTypes) {
  var Recipe = sequelize.define('Recipe', {
    recipe_name: DataTypes.STRING,
    instructions: DataTypes.TEXT,
    cuisine: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
       // Recipe.belongsToMany(models.Ingredient, {through: models.RecipeAndIngredients});
      }
    },
  });
  return Recipe;
};

