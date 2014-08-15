window.onload = app;

function app(){

	var Recipe = Parse.Object.extend("Recipe", {

	});

	var RecipeList = Parse.Collection.extend({
		model: Recipe
	});

	Parse.initialize("KtYn68P4rZSjDiYTbbopjSR8isFcpIPUw5gvT41W", "tKtv0jy9BB7BdzBSGUJTFIslsCDX9JcrzAScU0Xk");

	var myRecipes = new RecipeList();
	myRecipes.fetch().then(function(){
		console.log(myRecipes.toJSON());
	})
}