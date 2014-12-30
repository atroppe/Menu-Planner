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
            var $right = $('a#right');
            $right.attr('href', '#/appetizer');
            userArray = [];
            $('.theme').html('<h4>Choose a theme for your menu!</h4>');
            $(".activeTab").removeClass("activeTab");
            $emptyAll.empty();
            eventThemes();
        });

        $("body").on("click", "#party", function() {
            // console.log("party click event");
            $("#bkdImg").removeClass().addClass("wood");
            eventTheme = "Party";
        });
        $("body").on("click", "#weeknight", function() {
            $("#bkdImg").removeClass().addClass("chalkboard");
            eventTheme = "Weeknight";
        });
        $("body").on("click", "#picnic", function() {
            $("#bkdImg").removeClass().addClass("picnic");
            eventTheme = "Picnic";
        });
        $("body").on("click", "#holiday", function() {
            $("#bkdImg").removeClass().addClass("goldFabric");
            eventTheme = "Holiday";
        });

        Path.map('#/menu').to(function() {
            $('.theme').html('<h4>Click on your menu to print!</h4>');
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

                // console.log(matching);
                // console.log(matching[0].attributes.recipeName);
                // console.log(matching[0].id);
                // console.log(category);

                var $right = $('a#right');
                if (category === 'home') {
                    $right.attr('href', '#/appetizer');
                } else if (category === 'appetizer') {
                    $right.attr('href', '#/main');
                } else if (category === 'main') {
                    $right.attr('href', '#/side');
                } else if (category === 'side') {
                    $right.attr('href', '#/dessert');
                } else if (category === 'dessert') {
                    $right.attr('href', '#/menu');
                } 
                // else if (category === 'menu') {
                //     $right.remove();
                // }
                console.log(category);


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
//----------didn't work--------------
        // Path.map('#/print').to(function() {
        //     var $menu = $('#menu');
        //     window.print();
        //     console.log('print');
        // });

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

        function eventThemes(theme) {
            $.get('./templates/themes.tmpl').then(function(myTemplateHTML) {
                $('.themesHere').html(myTemplateHTML);
            });
        }

        //-----------------------------saving my recipes-----

        function getRecipe() {
            $('body').on('click', '.cards', function() {
                var recipeId = this.getAttribute('recipe-id');
                // console.log(recipeId);
                userArray.push(recipeId);
                // console.log(userArray);
                var msg = "recipe added!"
                $(this).addClass('added');
                // .append('<p>' + msg + '</p>')
            });
        }
        getRecipe();

        function printToMenu() {
                var $menu = $('.menuTextArea');
                // menu.innerText('WAT');
                if (!userArray) return;
                userArray.forEach(function(recipe) {
                    $menu.append('<li>' + recipe + '</li>');
                });
                printMenu();
            }
            // printToMenu();

    }
    //-------------printing menu with print button---------------
function printMenu() {
    $('body').on('click', '#menu', function() {
        window.print();
    });
    $('body').on('click', "a[href='#print']", function() {
        window.print();
        // return false;
        // var $menu = $('.menu');
        // $menu.print();
    });

}




//
//
//
//
//
//
