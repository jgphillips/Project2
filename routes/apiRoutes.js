var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.get("/api/ingredient/:ingredient", function(req,res){
    db.recipe.findAll({ where: { ingredient: req.params.ingredient } }).then(function(dbRecipes){
      res.json(dbRecipes);
    });
  });
  
  app.get("/api/search/:name", function(req,res){
    db.recipe.findAll({ where: { name: req.params.name } }).then(function(dbRecipes){
      res.json(dbRecipes);
    });
  });

};

  