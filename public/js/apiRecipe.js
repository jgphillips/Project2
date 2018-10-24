/*var API = {
    getRecipe: function() {
      return $.ajax({
        url: "api/search",
        type: "GET"
      });
    }
  };
*/
$(document).ready(function(){
  $(document).on("click", "#btnSearchRecipe", function(event){
    event.preventDefault();
    var searchParameter = $("#searchRecipe").val().trim();
    console.log(searchParameter);

    var queryURL = "https://api.edamam.com/search?q=" + searchParameter + "&app_id=d8a01ad1&app_key=ec212c380911dfbd6ccc557d4ce89405&from=0&to=10&calories=591-722&health=alcohol-free";

    $.ajax({
      url: queryURL,
      method: "GET"
    }).done(function(response){
      console.log(response);
    });
  });
});



