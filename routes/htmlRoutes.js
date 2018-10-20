var db = require("../models");

module.exports = function(app) {
  // Load index page // home page 
  app.get("/", function(req, res) {
     res.render("index");
  });

    // Load login page
    app.get("/login", function(req, res) {
      res.render("userLogin");
   });

   // user login

   app.post("/login",function(req, res) {
      console.log(req.body.email);
   });

   // search for recipes
 
    // add recipe
    app.get("/new", function(req, res) {
    res.render("addrecipe", {});
    });

 // submit recipes
  app.post("/new", function(req, res) {

    db.recipe.create({
      name: req.body.recipe,
      cuisine: req.body.cuisine,
      instructions: req.body.instructions,
      allergy: req.body.allergies
    }).then(function() {
      
      res.redirect("/favorite");
    });
  });


   // users view favorite recipes
   app.get("/favorite", function(req, res) {
    db.recipe.findAll({}).then(function(dbrecipe) {
      res.render("favoriteRecipes", {
        recipes: dbrecipe
      });
    });
  });


  

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

      

  

