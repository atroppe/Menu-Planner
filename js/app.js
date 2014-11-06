window.onload = app;

function app() {

    // instantiate app-level variables
    var userArray = [];
    var eventTheme = "";

    console.log("app.js is working");

    var Recipe = Parse.Object.extend("Recipe", {

    });

    var RecipeList = Parse.Collection.extend({
        model: Recipe
    });

    Parse.initialize("KtYn68P4rZSjDiYTbbopjSR8isFcpIPUw5gvT41W", "tKtv0jy9BB7BdzBSGUJTFIslsCDX9JcrzAScU0Xk");

    // myRecipes.fetch().then(function(r) {
    // console.log(myRecipes.toJSON());
    // console.log(r);
    // })

    var myRecipes = new RecipeList();
    var recipeData = [];
    var $emptyAll = $('#menuHere, .themesHere, .insertRecipesHere');

    $(".tabs").on("click", ".tab", function() {
        $(".activeTab").removeClass("activeTab");
        $(this).addClass("activeTab");
    });
    $('body').on('click', "a[href='#top']", function() {
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
    });

    //---------------maps-----------------------

    Path.map('#/home').to(function() {
        $("a#triangle-right").attr('href', '#/appetizer');
        userArray = [];
        $('.theme').html('<h4>Choose a theme for your menu!</h4>');
        $(".activeTab").removeClass("activeTab");
        // $('#menuHere').empty();
        // $('.theme').removeClass('hide');
        // $('.insertRecipesHere').empty();
        // $('#pulledRecipes').addClass("hide");
        // $('#saveButton').addClass("hide");
        $emptyAll.empty();
        eventThemes();
    });

    $("body").on("click", "#party", function() {
        console.log("party click event");
        $("#bkdImg").removeClass().addClass("wood");
        eventTheme = "Party";
        // $("#event").html("Party!");
        // $('#mainTitle').removeClass().addClass("textBlue");
    });
    $("body").on("click", "#weeknight", function() {
        $("#bkdImg").removeClass().addClass("chalkboard");
        eventTheme = "Weeknight";
        // $("#event").html("Weeknight meal");
        // $('#mainTitle').removeClass().addClass("textBlack");
    });
    $("body").on("click", "#picnic", function() {
        $("#bkdImg").removeClass().addClass("picnic");
        eventTheme = "Picnic";
        // $("#event").html("Picnic!");
        // $('#mainTitle').removeClass().addClass("textRed");
    });
    $("body").on("click", "#holiday", function() {
        $("#bkdImg").removeClass().addClass("goldFabric");
        eventTheme = "Holiday";
        // $("#event").html("Holiday");
        // $('#mainTitle').removeClass().addClass("textGold");
    });

    Path.map('#/menu').to(function() {
        $('.theme').html('<h4>Click on your menu to see your recipes!</h4>');
        // $('.theme').addClass('hide');
        // $('#menuHere').removeClass("hide");
        $emptyAll.empty();
        addMenuTemplateAJAX();
        // console.log(userArray)
        // printToMenu();
        // getRecipe();
    });

    Path.map("#/:someCategory").to(function() {
        var category = this.params.someCategory;
        myRecipes.fetch().then(function() {
            var matching = myRecipes.filter(function(r) {
                return r.attributes.foodCategory === category;
            });

            console.log(matching);
            console.log(matching[0].attributes.recipeName);
            console.log(matching[0].id);
            console.log(category);

            if (category === 'home') {
                $("a#triangle-right").attr('href', '#/appetizer');
            } else if (category === 'appetizer') {
                $("a#triangle-right").attr('href', '#/main');
            } else if (category === 'main') {
                $("a#triangle-right").attr('href', '#/side');
            } else if (category === 'side') {
                $("a#triangle-right").attr('href', '#/dessert');
            } else if (category === 'dessert') {
                $("a#triangle-right").attr('href', '#/menu');
            }


            if (matching.length) {
                $('.theme').html('<h4>Click on a recipe card to add it to your menu!</h4>');
                $emptyAll.empty();
                // $('.triangleNav').slideUp(1000);
                for (var i = 0; i < matching.length; i++) {
                    drawRecipe(matching[i]);
                }
                ///TURNING OFF LISTINGS
                // $('.insertListings').empty();
                // for (var i = 0; i < matching.length; i++) {
                // console.log(matching[i].attributes.recipeName);
                // console.log(recipeListings(matching[i]));
                //     recipeListings(matching[i]);
                // }
                // $('.showCategory').html(matching[0].attributes.foodCategory);
            }
        });

    });

    // ----------------activating path-------------------

    Path.root("#/home");
    Path.listen();

    // ----------------adding templates-------------------
    // function addMenuInlineScript() {
    //     var myTemplateHTML = $("#menu-template")[0].textContent;
    //     $('.insertListings').empty();
    //     $('.insertRecipesHere').empty();
    //     $('#menuHere').html(myTemplateHTML);
    // }

    function addMenuTemplateAJAX() {
        $.get('./templates/menu2.tmpl').then(function(myTemplateHTML) {
            // $('#menuHere', '.themesHere', '.insertRecipesHere').empty();
            $('#menuHere').html(myTemplateHTML);
            // $('.myMenu').html(userArray);
            printToMenu();
            $('#menuHeader').html('<h4> My ' + eventTheme + ' Menu </h4');
        });
    }

    function drawRecipe(recipe) {
        $.get('./templates/card-template.tmpl').then(function(myTemplateHTML) {
            var myTemplatingFn = _.template(myTemplateHTML);
            var resultingHTML = myTemplatingFn(recipe);
            $('.insertRecipesHere').append(resultingHTML);
        });
    }

    // function recipeListings(category) {
    //     $.get('./templates/listings-template.tmpl').then(function(myTemplateHTML) {
    //         var myTemplatingFn = _.template(myTemplateHTML);
    //         var resultingHTML = myTemplatingFn(category);
    //         $('#pulledRecipes').removeClass("hide");
    //         $('.insertListings').append(resultingHTML);
    //     })

    // }

    function eventThemes(theme) {
        $.get('./templates/themes.tmpl').then(function(myTemplateHTML) {
            // $('#pulledRecipes').removeClass("hide");
            $('.themesHere').html(myTemplateHTML);
        });
    }

    //-----------------------------saving my recipes-----

    function getRecipe() {
        $('body').on('click', '.cards', function() {
            var recipeId = this.getAttribute('recipe-id');
            console.log(recipeId);
            userArray.push(recipeId);
            console.log(userArray);
        });
    }
    getRecipe();

    function printToMenu() {
            var menu = $('.menuTextArea');
            // menu.innerText('WAT');
            if (!userArray) return;
            userArray.forEach(function(recipe) {
                menu.append('<li>' + recipe + '</li>');
            });
        }
        // printToMenu();

}




//
//
//
//
//
//
