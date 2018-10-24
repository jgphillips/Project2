var db = require("../models");

module.exports = function(app) {
  // Get all favs
  app.get("/api/favoriterecipes", function(req, res) {
    db.favorites.findAll({}).then(function(favorites) {
      res.json(favorites);
    });
  });

  // Create a new example
  app.post("/api/favoriterecipes", function(req, res) {
    db.favorites.create(req.body).then(function(favorites) {
      res.json(favorites);
    });
  });

  // Delete an example by ids
  app.delete("/api/favoriterecipes", function(req, res) {
    db.favorites.destroy({ where: { id: req.params.id } }).then(function(favorites) {
      res.json(favorites);
    });
  });
};
