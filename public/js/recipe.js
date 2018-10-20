var API = {
    getRecipe: function() {
      return $.ajax({
        url: "api/search",
        type: "GET"
      });
    }
  };