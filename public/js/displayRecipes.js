function displayRecipes(result){

              console.log(result);

              var row = $("<row>");
              $("#results").append(row);

               for(var i = 0; i < result.length; i++){
                //Define recipe Item with props
                var recipeItem = result[i].recipe;

                //Define Jquery Dom elements
                var title = $("<h4>");
                var img = $("<img>");
                var div = $("<div>");
              
                //Add attributes to elements
                img.attr({
                  src: recipeItem.image,
                  alt: recipeItem.label,
                });

                title.attr({
                  style: "font-weight: bold;"
                });

                  div.append(title);
                  div.append(img);
               
               $("#results").append(image);
               }

            };

$(document).ready(function(){

    $('#searchRecipe').keypress(function(e){
        if(e.which == 13){//Enter key pressed
    
            $('#searchRecipeButton').click();//Trigger search button click event
        }
    });

    $("#searchRecipeButton").click(function(){
      event.preventDefault();

      $("#results").empty();

    });

      

});
