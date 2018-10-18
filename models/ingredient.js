'use strict';
module.exports = function(sequelize, DataTypes) {
  var Ingredient = sequelize.define('Ingredient', {
    ingredient_name: DataTypes.STRING,
    category: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        // Ingredients are related to recipes via RecipeIngredient join table 
    //  Ingredient.belongsToMany(models.Recipe, {through: models.#################});
     }
    }
  });
  return Ingredient;
};