var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

    db.recipe.findAll({}).then(function(dbRecipes) {
      
      res.render("index", {        
        recipes: dbRecipes
      });
    });
  });

  app.get("/new", function(req, res) {
    res.render("addrecipe", {});
  });

  app.post("/new", function(req, res) {

    db.recipe.create({
      name: req.body.recipe,
      cuisine: req.body.cuisine,
      instructions: req.body.instructions,
      allergy: req.body.allergies
    }).then(function() {
      
      res.redirect("/");
    });
  });

  // Load example page and pass in an example by id
  app.get("/example/:id", function(req, res) {
    db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
      res.render("example", {
        example: dbExample
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
