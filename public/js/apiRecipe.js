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

        var row = $("<div class='row'>");
        $("#results").append(row);

          for(var i = 0; i < response.hits.length; i++){
          //Define recipe Item with props
          var recipeItem = response.hits[i];

          //Define Jquery Dom elements
          var colDiv = $("<div>");
          var div = $("<div>");
          var img = $("<img>");
          var cardBlock = $("<div>");
          var title = $("<h4>").text(recipeItem.recipe.label);
          var dietLabels = $("<p>").text(recipeItem.recipe.dietLabels);
          var fullRecipe = $("<a>").text(recipeItem.recipe.fullRecipe);
          var favButton =$("<button>").text("save");
        
          //Add attributes to elements
          colDiv.attr({
            class: "col-md-4 col-sm-6",
          });

          div.attr({
            class: "card recipeCard",
          });

          img.attr({
            "src": recipeItem.recipe.image,
            "alt": recipeItem.recipe.label,
          });

          cardBlock.attr({
            class: "card-block",
            style: "text-align:center"
          });

          title.attr({
            style: "font-weight: bold;"
          });

          dietLabels.attr({
            style: "font-weight:bold;color:black"
          })

          fullRecipe.attr({
            "href": recipeItem.recipe.url,
            class: "btn btn-primary card-btn",
            target: "_blank"
          });

          favButton.attr({
            id: "favButtonSelect",
            class: "btn btn-primary card-btn",
          })


            
            colDiv.append(div);
            div.append(img);
            div.append($("<hr>"));

            cardBlock.append(title);
            cardBlock.append($("<hr>"));
            cardBlock.append(dietLabels);
            cardBlock.append($("<hr>"));
            cardBlock.append(fullRecipe);
            cardBlock.append($("<hr>"));
            cardBlock.append(favButton);

            div.append(cardBlock);
          
          row.append(div);
          
      };
    });
  });
  

});



