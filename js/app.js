window.onload = app;

function app() {

    var Recipe = Parse.Object.extend("Recipe", {

    });

    var RecipeList = Parse.Collection.extend({
        model: Recipe
    });

    Parse.initialize("KtYn68P4rZSjDiYTbbopjSR8isFcpIPUw5gvT41W", "tKtv0jy9BB7BdzBSGUJTFIslsCDX9JcrzAScU0Xk");

    var myRecipes = new RecipeList();
    var recipeData = [];

    myRecipes.fetch().then(function() {
        var matching = myRecipes.filter(function(r) {
            return r.attributes.foodCategory === window.location.hash.slice(1);
        });

        console.log(matching)

        if (matching.length) {
            for (var i = 0; i < matching.length; i++) {
                drawRecipe(matching[i]);
            }
        }
    });

    function drawRecipe(recipe) {
        var myTemplateHTML = $('#card-template')[0].textContent;
        console.log($('#card-template')[0]);
        var myTemplatingFn = _.template(myTemplateHTML);
        var resultingHTML = myTemplatingFn(recipe);
        console.log(recipe)
        $('#pageContent').append(resultingHTML);
        return;

    }
}
