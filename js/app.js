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

    // var cornSalad = new Recipe();
    // cornSalad.save({
    //     "recipeName": "Avocado and Corn Salad",
    //     "BakeTime": 0,
    //     "BakeTemp": 0,
    //     "ingredientList": [
    //         "5 Ears Corn, husk removed, brush with olive oil and grill",
    //         "remove corn with sharp knife",
    //         "2 Avocado’ s, diced and sprinkled with lemon juice to prevent browning",
    //         "2 C.Tomatoes, red and yellow cherry variety or equivalent",
    //         "1 Small red onion, finely diced",
    //         "1 1 / 2 C.English cucumber, skin on and chopped",
    //         "dressing: ",
    //         "6 T.Olive oil",
    //         "2 T.Sherry vinegar",
    //         "1 t.Garlic powder",
    //         "2 T.Fresh cilantro, minced",
    //         "1 / 2 t.Salt",
    //         "10 Grinds of fresh ground pepper"
    //     ],
    //     "instructions": [
    //         "Add vegetables to a large bowl and refrigerate until ready to use.",
    //         "Add all of the dressing ingredients in a small glass jar with a lid. Shake really well.”, “Taste and adjust seasoning and ratios of oil and vinegar as you desire.",
    //         "When ready to serve salad, add the dressing and gently toss."
    //     ],
    //     "foodCategory": "side",
    //     "eventTheme": "party",
    //     "Kosher": true,
    //     "Passover": true,
    //     "lowFat": true,
    //     "lowCarb": true,
    //     "vegetarian": true,
    //     "dairyFree": true,
    //     "recipeTricks": "",
    // }, {});

    // var grilledChicken = new Recipe();
    // grilledChicken.save({
    //     "recipeName": "Marinated Grilled Chicken",
    //     "BakeTime": 20,
    //     "BakeTemp": 0,
    //     "ingredientList": [
    //         'juice of 2 whole lemons',
    //         '5 sprigs fresh parsley, chopped',
    //         '3 cloves garlic, smashed and finely chopped',
    //         '1/2 teaspoon crushed red pepper',
    //         'olive oil',
    //         '8 chicken thighs, trimmed of excess fat',
    //         'salt to taste',
    //     ],
    //     "instructions": [
    //         'clean chicken and place in a large ziplock bag.  Add lemon juice, parsley, and pepper',
    //         'let marinate at least 1 hour',
    //         'remove from marinade and sprinkle with olive oil and salt',
    //         'place chicken on grill about 20 minutes, turning every 3-4 minute until no longer pink',
    //     ],
    //     "foodCategory": "main",
    //     "eventTheme": "party",
    //     "Kosher": true,
    //     "Passover": true,
    //     "lowFat": false,
    //     "lowCarb": true,
    //     "vegetarian": false,
    //     "dairyFree": false,
    //     "recipeTricks": "",
    // }, {});

    // var donutMuffins = new Recipe();
    // donutMuffins.save({
    //     "recipeName": "Glazed Donut Muffins",
    //     "BakeTime": 15,
    //     "BakeTemp": 425,
    //     "ingredientList": [
    //         "1/4 cup butter",
    //         "1/4 cup vegetable oil",
    //         "3/4 cup sugar",
    //         "1/3 cup brown sugar",
    //         "2 large eggs",
    //         "1 1/2 t baking powder",
    //         "1/2 t baking soda",
    //         "1 t ground nutmeg",
    //         "2 t cinnamon",
    //         "3/4 t salt",
    //         "1 t vanilla extract",
    //         "2 2/3 cup flour",
    //         "1 cup milk",
    //         "3 T melted butter",
    //         "1 cup powdered sugar",
    //         "1 t vanilla",
    //         "2 T hot water"
    //     ],
    //     "instructions": [
    //         "Line cupcake tray with liners",
    //         "In your mixer, beat together butter, oil and sugars until smooth. Add eggs and beat until fluffy. Add powder, soda, nutmeg, cinnamon, salt vanilla, milk and flour. Beat well",
    //         "Spoon batter into liners and fill to tops. Bake for 15-17 minutes or until tops are golden and springy to the touch. Let cool 10 minutes before adding Glaze",
    //         "To make the glaze, mix melted butter, powdered sugar, vanilla and water together. Mix until smooth",
    //         "When muffins have cooled slightly, dip the muffin top into the glaze and allow the glaze to harden. Once hardened, dip a second time and allow to harden"
    //     ],
    //     "foodCategory": "dessert",
    //     "eventTheme": "party",
    //     "Kosher": true,
    //     "Passover": false,
    //     "lowFat": false,
    //     "lowCarb": false,
    //     "vegetarian": true,
    //     "dairyFree": false,
    //     "recipeTricks": "",
    // }, {});

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
        $('#mainTitle').removeClass().addClass("textBlue");
    });
    $("body").on("click", "#weeknight", function() {
        $("#bkdImg").removeClass().addClass("chalkboard");
        $("#event").html("Weeknight meal");
        $('#mainTitle').removeClass().addClass("textBlack");
    });
    $("body").on("click", "#picnic", function() {
        $("#bkdImg").removeClass().addClass("picnic");
        $("#event").html("Picnic!");
        $('#mainTitle').removeClass().addClass("textRed");
    });
    $("body").on("click", "#holiday", function() {
        $("#bkdImg").removeClass().addClass("goldFabric");
        $("#event").html("Holiday");
        $('#mainTitle').removeClass().addClass("textGold");
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

    // var stuff = $('#stuff');
    // var myStuff = [];
    // $(".insertListings").on("click", "input", function(event) {
    //     var indexOfId = myStuff.indexOf(this.value);

    //     if (indexOfId === -1) {
    //         myStuff.push(this.value);
    //     } else {
    //         myStuff[indexOfId] = null;
    //     }

    //     console.log(myStuff)
    // });
    // console.log(myStuff);
    // console.log(stuff);
    // console.log(stuff.value);

}
