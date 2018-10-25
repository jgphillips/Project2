var db = require("../models");

module.exports = function(app) {
  // Load index page (app home page : about app, etc)
  app.get("/", function(req, res) {
     res.render("index");
  });
  // Loads the login page for the user to sign in 
  app.get("/login", function(req, res) {
      res.render("userLogin");
   });
    // Loads the register page for the user to register
  app.get("/signup", function(req, res) {
    res.render("userRegister");
 });
  // current user logged in sees home page
   app.post("/login",function(req, res) {
    console.log(req.body.email);
    res.render("home");
  });

   // search for recipes
   app.get("/searchrecipes", function(req, res) {
    res.render("searchRecipes", {});
    });

 
    // add recipe
    app.get("/addrecipes", function(req, res) {
    res.render("addRecipes", {});
    });

 // submit recipes
  app.post("/addrecipes", function(req, res) {

    db.recipe.create({
      name: req.body.recipe,
      cuisine: req.body.cuisine,
      instructions: req.body.instructions,
      allergy: req.body.allergies
    }).then(function() {
      
      res.redirect("/favoriterecipes");
    });
  });


   // users view favorite recipes
   app.get("/favoriterecipes", function(req, res) {
    db.recipe.findAll({}).then(function(dbrecipe) {
      res.render("favoriteRecipes", {
        recipes: dbrecipe
      });
    });
  });


  
  // current user can log out, goes back to the index (about app page)
  app.get("/logout",function(req, res) {
    res.render("index");
  });



  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

      

  

