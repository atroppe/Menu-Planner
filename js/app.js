window.onload = app;

function app() {
    console.log("hello");

    var Recipe = Parse.Object.extend("Recipe", {

    });

    var RecipeList = Parse.Collection.extend({
        model: Recipe
    });

    Parse.initialize("KtYn68P4rZSjDiYTbbopjSR8isFcpIPUw5gvT41W", "tKtv0jy9BB7BdzBSGUJTFIslsCDX9JcrzAScU0Xk");

    var myRecipes = new RecipeList();
    var recipeData = [];

    $(".tabs").on("click", ".tab", function() {
        $(".activeTab").removeClass("activeTab");
        $(this).addClass("activeTab");
    });
    // $(".tabs").on("click", ".tab", function() {
    //     $(".activeTab").removeClass("activeTab");
    //     $(this).addClass("activeTab");
    // });


    function drawRecipe(recipe) {
        var myTemplateHTML = $('#card-template')[0].textContent
        var myTemplatingFn = _.template(myTemplateHTML);
        var resultingHTML = myTemplatingFn(recipe);
        $('.insertRecipesHere').append(resultingHTML);
        return;
    }

    function recipeListings(category) {
        var myTemplateHTML = $('#listings-template')[0].textContent
        var myTemplatingFn = _.template(myTemplateHTML);
        var resultingHTML = myTemplatingFn(category);
        $('.insertListings').append(resultingHTML);
        // return;
    }

    function eventThemes(theme) {
        var myTemplateHTML = $('#theme-template')[0].textContent
        $('.insertListings').append(myTemplateHTML);
    }

    Path.map('#/home').to(function(){
    	$('.insertRecipesHere').empty();
        $('.showCategory').html("Choose a theme");
        $('.insertListings').empty();
        $('#saveButton').addClass("hide");
        eventThemes();

        $(".themes").on("click", "#party", function() {
            $("#bkdImg").removeClass().addClass("wood");
            $("#event").html("Party!");
            // $(".triangleNav").addClass("blueText");
        });
        $(".themes").on("click", "#weeknight", function() {
            $("#bkdImg").removeClass().addClass("chalkboard");
            $("#event").html("Weeknight meal");
            // $(".triangleNav").addClass("pinkText");
        });
        $(".themes").on("click", "#picnic", function() {
            $("#bkdImg").removeClass().addClass("picnic");
            $("#event").html("Picnic!");
        });
        $(".themes").on("click", "#holiday", function() {
            $("#bkdImg").removeClass().addClass("goldFabric");
            $("#event").html("Holiday");
        });
    })

    Path.map("#/:someCategory").to(function() {
        var category = this.params.someCategory;
        myRecipes.fetch().then(function() {
            var matching = myRecipes.filter(function(r) {
                return r.attributes.foodCategory === category;
            });

            // console.log(matching);
            // console.log(matching[0].attributes.recipeName);

            if (matching.length) {
                $('.insertRecipesHere').empty();
                for (var i = 0; i < matching.length; i++) {
                    drawRecipe(matching[i]);
                }
                $('.insertListings').empty();
                for (var i = 0; i < matching.length; i++) {
                    // console.log(matching[i].attributes.recipeName);
                    // console.log(recipeListings(matching[i]));
                    recipeListings(matching[i]);
                }
                $('.showCategory').html(matching[0].attributes.foodCategory);
                $('#saveButton').removeClass("hide");

            }
        });

    });
    Path.root("#/home");
    Path.listen();

    // var saveRecipes = function() {

    var stuff = $('#stuff');
    var myStuff = [];
    $(".insertListings").on("click", "input", function(event) {
    	var indexOfId = myStuff.indexOf(this.value);

		if(indexOfId === -1){
			myStuff.push(this.value);
		} else {
			myStuff[indexOfId] = null;
		}

		console.log(myStuff)
    });
    // console.log(myStuff);
    // console.log(stuff);
    // console.log(stuff.value);
    





    // Path.map('#/:somewhere').to(function() {
    //     var uRHere = window.location.hash;
    //     if (uRHere = "#/home")
    //         $('#pageContent').empty();
    // });
    // Path.root("#/home");
    // Path.listen();



    // ----------------------------
    // var x = document.getElementById("myCheck").value;

}
