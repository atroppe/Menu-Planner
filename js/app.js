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

    myRecipes.fetch().then(function(r) {
        // console.log(myRecipes.toJSON());
        // console.log(r);
    })



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
            // $('#pulledRecipes').removeClass("hide");
            $('.theme').html(myTemplateHTML);
        });
    }


    //---------------maps-----------------------

    Path.map('#/home').to(function() {
        $('#menuHere').empty();
        $('.insertRecipesHere').empty();
        $('#pulledRecipes').addClass("hide");
        $('#saveButton').addClass("hide");
        $('.theme').removeClass('hide');
        eventThemes();
    });

    $("body").on("click", "#party", function() {
        console.log("party click event");
        $("#bkdImg").removeClass().addClass("wood");
        // $("#event").html("Party!");
        // $('#mainTitle').removeClass().addClass("textBlue");
    });
    $("body").on("click", "#weeknight", function() {
        $("#bkdImg").removeClass().addClass("chalkboard");
        // $("#event").html("Weeknight meal");
        // $('#mainTitle').removeClass().addClass("textBlack");
    });
    $("body").on("click", "#picnic", function() {
        $("#bkdImg").removeClass().addClass("picnic");
        // $("#event").html("Picnic!");
        // $('#mainTitle').removeClass().addClass("textRed");
    });
    $("body").on("click", "#holiday", function() {
        $("#bkdImg").removeClass().addClass("goldFabric");
        // $("#event").html("Holiday");
        // $('#mainTitle').removeClass().addClass("textGold");
    });

    Path.map('#/menu').to(function() {
        $('.theme').fadeOut();
        addMenuTemplateAJAX();
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
                    ///TURNING OFF LISTINGS
                    recipeListings(matching[i]);
                }
                $('.showCategory').html(matching[0].attributes.foodCategory);
                $('#saveButton').removeClass("hide");
                $('.theme').addClass('hide');

            }
        });

    });

    // ----------------activating path-------------------

    Path.root("#/home");
    Path.listen();

    // ----------------adding menu-------------------
    function addMenuInlineScript() {
        var myTemplateHTML = $("#menu-template")[0].textContent;
        $('.insertListings').empty();
        $('.insertRecipesHere').empty();
        $('#menuHere').html(myTemplateHTML);
    }

    function addMenuTemplateAJAX() {
        $.get('./templates/menu2.tmpl').then(function(myTemplateHTML) {
            $('#pulledRecipes').addClass("hide");
            $('.insertRecipesHere').empty();
            $('#menuHere').html(myTemplateHTML);
            // $('.myMenu').html(userArray);
        });
    }


    //-----------------------------saving my recipes-----

    var userArray = [];

    function getRecipe() {
        $('body').on('click', '.cards', function() {
            var recipeId = this.getAttribute('recipe-id');
            console.log(recipeId);
            userArray.push(recipeId);
            console.log(userArray);
            userArray.forEach(function(recipe) {
                var li = document.createElement('li').innerText = recipe;
                $('.myMenu').append(li);
            });
            // ///////////
            // userArray.forEach(function(recipe){
            //     $('.myMenu').append('<li>'+recipe+'</li>');
            // });
        });
    }
    getRecipe();
}




// var R = $('.saveRecipe');
// console.log(R.value);
// R = [].slice.call(R);
// console.log(R[0]);



// $('body').on('click', '.saveRecipe', function(form) {
//     for (i = 0; i < R.length; i++)
//         if (R[i].checked) {
//             console.log(R[i].value);
//         }

// });

// function userRecipes(element) {
//     if (element.checked) {
//         $('body').on('click', '#saveButton', function() {
//             userArray.push(element.value);
//         });
//     }
// console.log(userArray);
// console.log(element[0]);
// }
// userRecipes($('.saveRecipe'));




//
//
//
//
//
//
//
//
