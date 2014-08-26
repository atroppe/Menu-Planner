window.onload = app;

function app() {
    console.log("app.js is working");

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


    function drawRecipe(recipe) {
        $.get('./templates/card-template.tmpl').then(function(myTemplateHTML) {
            var myTemplatingFn = _.template(myTemplateHTML);
            var resultingHTML = myTemplatingFn(recipe);
            $('.insertRecipesHere').append(resultingHTML);
        });
    }

    function recipeListings(category) {
        // var myTemplateHTML = $('#listings-template')[0].textContent
        $.get('./templates/listings-template.tmpl').then(function(myTemplateHTML) {
            var myTemplatingFn = _.template(myTemplateHTML);
            var resultingHTML = myTemplatingFn(category);
            $('#pulledRecipes').removeClass("hide");
            $('.insertListings').append(resultingHTML);
        })

    }

    function eventThemes(theme) {
        $.get('./templates/themes.tmpl').then(function(myTemplateHTML) {
            $('#pulledRecipes').removeClass("hide");
            $('.insertListings').html(myTemplateHTML);
        });
    }

    // ----------------adding menu-------------------
    function addMenuInlineScript() {
        var myTemplateHTML = $("#menu-template")[0].textContent;
        $('.insertListings').empty();
        $('.insertRecipesHere').empty();
        $('#menuHere').html(myTemplateHTML);
    }

    function addMenuTemplateAJAX() {
        $.get('./templates/menu.tmpl').then(function(myTemplateHTML) {
            $('#pulledRecipes').addClass("hide");
            $('.insertRecipesHere').empty();
            $('#menuHere').html(myTemplateHTML);
        });
    }
    //---------------maps-----------------------

    Path.map('#/home').to(function() {
        $('#menuHere').empty();
        $('.insertRecipesHere').empty();
        $('.showCategory').html("Choose a theme");
        $('#saveButton').addClass("hide");
        eventThemes();
    });

    $("body").on("click", "#party", function() {
        console.log("party click event");
        $("#bkdImg").removeClass().addClass("wood");
        $("#event").html("Party!");
        // $(".triangleNav").addClass("blueText");
    });
    $("body").on("click", "#weeknight", function() {
        $("#bkdImg").removeClass().addClass("chalkboard");
        $("#event").html("Weeknight meal");
        // $(".triangleNav").addClass("pinkText");
    });
    $("body").on("click", "#picnic", function() {
        $("#bkdImg").removeClass().addClass("picnic");
        $("#event").html("Picnic!");
    });
    $("body").on("click", "#holiday", function() {
        $("#bkdImg").removeClass().addClass("goldFabric");
        $("#event").html("Holiday");
    });

    Path.map('#/menu').to(function() {
        addMenuTemplateAJAX();
    });

    Path.map("#/:someCategory").to(function() {
        var category = this.params.someCategory;
        myRecipes.fetch().then(function() {
            var matching = myRecipes.filter(function(r) {
                return r.attributes.foodCategory === category;
            });

            // console.log(matching);
            // console.log(matching[0].attributes.recipeName);

            if (matching.length) {
                $('#menuHere').empty();
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

    // ----------------activating path-------------------

    Path.root("#/home");
    Path.listen();

    //-----------------------------saving my recipes-----
    // var saveRecipes = function() {

    var stuff = $('#stuff');
    var myStuff = [];
    $(".insertListings").on("click", "input", function(event) {
        var indexOfId = myStuff.indexOf(this.value);

        if (indexOfId === -1) {
            myStuff.push(this.value);
        } else {
            myStuff[indexOfId] = null;
        }

        console.log(myStuff)
    });
    // console.log(myStuff);
    // console.log(stuff);
    // console.log(stuff.value);

}
