//-----------sides---------------------
window.onload = app;

function app() {
    console.log("recipes.js is working");

    var Recipe = Parse.Object.extend("Recipe", {

    });

    var RecipeList = Parse.Collection.extend({
        model: Recipe
    });

    Parse.initialize("KtYn68P4rZSjDiYTbbopjSR8isFcpIPUw5gvT41W", "tKtv0jy9BB7BdzBSGUJTFIslsCDX9JcrzAScU0Xk");

    var myRecipes = new RecipeList();
    var recipeData = [];

    var potatoKugel = new Recipe();
    potatoKugel.save({
        "recipeName": "Invisible Vegetable Potato Kugel",
        "BakeTime": 90,
        "BakeTemp": 350,
        "ingredientList": [
            "3 eggs",
            "1/2 cup oil",
            "1 onion",
            "1 1/4 t salt",
            "1/4 t pepper",
            "1/4 t baking powder",
            "1/4 cup flour",
            "2 potatoes",
            "2 zucchini",
        ],
        "instructions": [
            "fit food proccessor with blade tool",
            "add first 6 ingredients and blend well",
            "add grater attachment and grate potatoes and zucchini",
            "mix, pour into pan and bake",
        ],
        "foodCategory": "side",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "this recipe helps you save time by using the food proccessor blade to do the mixing for you.",
    }, {});

    var broccoliKugel = new Recipe();
    broccoliKugel.save({
        "recipeName": "Broccoli-Spinach Bake",
        "BakeTime": 60,
        "BakeTemp": 350,
        "ingredientList": [
            "16 oz bag frozen broccoli",
            "16 oz bag frozen spinach",
            "1 chopped onion",
            "1 c mayo",
            "5 eggs",
            "3 T onion soup mix",
            "Pepper to taste",
            "½ c almond milk",
        ],
        "instructions": [
            "thaw frozen vegetables and mix all ingredients",
            "pour into pan and bake at 350° for 1 hour",
        ],
        "foodCategory": "side",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": true,
        "lowFat": false,
        "lowCarb": true,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    var redCabbage = new Recipe();
    redCabbage.save({
        "recipeName": "Red Cabbage Cole Slaw",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "16 oz shredded cabbage",
            "¼ c sugar",
            "3T cider vinegar",
            "½ cup mayo",
            "Salt and pepper to taste",
        ],
        "instructions": [
            "combine dressing ingredients and pour over cabbage",
            "mix well and serve"
        ],
        "foodCategory": "side",
        "eventTheme": "weeknight",
        "Kosher": true,
        "Passover": true,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});



    var limaRice = new Recipe();
    limaRice.save({
        "recipeName": "Dill Rice with Lima Beans",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "2 cups dry basmati rice",
            "1 package frozen lima beans",
            "1/4 cup olive oil",
            "1/8-1/4 cup dill",
            "1 t salt",
            "1/4 t pepper",
        ],
        "instructions": [
            "cook rice according to package directions",
            "rinse lima beans and place in a pot",
            "add water so that lima beans are almost covered and place on high heat until it starts to boil",
            "reduce to simmer and add oil, and seasonings and mix well",
            "boil until soft, stirring occasionally",
            "in batches, add cooked rice to pot",
        ],
        "foodCategory": "side",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    var yellowRice = new Recipe();
    yellowRice.save({
        "recipeName": "Yellow Rice",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "2 cups dry basmati rice",
            "1 onion, chopped",
            "1/4 cup olive oil",
            "3 T instant chicken soup powder",
            "1/4 t pepper",
            "1/4 t turmeric",
        ],
        "instructions": [
            "cook rice according to package directions",
            "heat oil in a pot and saute onion until lightly browned",
            "add the other vegetable and seasonings and saute for 5 minutes",
            "in batches, add cooked rice to pot and mix well",
        ],
        "foodCategory": "side",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});
    //-------------------------deserts--------------------------
    var appleCrumble = new Recipe();
    appleCrumble.save({
        "recipeName": "Apple Crumble",
        "BakeTime": 60,
        "BakeTemp": 325,
        "ingredientList": [
            "8 apples, thinly sliced",
            "3 T lemon juice",
            "2 t cinnamon",
            "2 eggs",
            "3/4 cup oil",
            "1 cup sugar",
            "2 t vanilla",
            "4 cups flour"
        ],
        "instructions": [
            "combine apples, lemon juice and cinnamon",
            "in a seperate bowl combine eggs with oil and sugar",
            "add vanilla and flour and mix until crumbles form",
            "layer half of the dough in a pan",
            "add the apple mixturemon top of dough",
            "top apple with remaining dough",
            "bake 1 hour at 325°"
        ],
        "foodCategory": "dessert",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "If you prefer less dough, you can add extra fruit and split the dough between 2 pans.",
    }, {});

    var iceCream = new Recipe();
    iceCream.save({
        "recipeName": "Layered Ice Cream Sandwiches",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "16 oz coffee whitener",
            "16 oz desert whip",
            "1 vanilla instant pudding",
            "1 chocolate instant pudding",
            "1 box graham crackers or tea biscuits",
            "1 cup confectionary sugar",
            "3 T cocoa",
            "3 T hot water",
            "3 T canola oil"
        ],
        "instructions": [
            "mix 8 oz. coffee whitener with vanilla pudding and refrigerate",
            "mix the other 8 oz. with the chocolate pudding and refrigerate",
            "meanwhile, whip up the dessert whips until stiff peaks form",
            "mix half of the dessert whip with each pudding mixture",
            "in a 9x13 inch pan, layer graham crackers, then chocolate mixture, another layer of graham crackers, vanilla mixture, and another layer of graham crackers",
            "to form glaze, mix sugar and cocoa with hot water and oil, adding 1 spoonful at a time",
            "drizzle over sandwiches and freeze several hours",
        ],
        "foodCategory": "dessert",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    var peanutButter = new Recipe();
    peanutButter.save({
        "recipeName": "Chocolate-Peanut Butter Balls",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "12 oz. peanut butter",
            "1 cup margarine",
            "2 cups confectionary sugar",
            "2 cups graham cracker crumbs",
            "6 oz. chocolate chips",
        ],
        "instructions": [
            "line a tray with parchment paper",
            "melt peanut butter with 3/4 cup margarine",
            "add sugar and graham cracker crumbs and mix well",
            "form into balls and place in freezer a short while",
            "melt chocolate with remaining margarine and double dip peanut butter balls in chocolate mixture",
            "place in refrigerator until chilled, or store in freezer until ready to serve",
        ],
        "foodCategory": "dessert",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    var blackWhite = new Recipe();
    blackWhite.save({
        "recipeName": "Black and White Cookies",
        "BakeTime": 10,
        "BakeTemp": 375,
        "ingredientList": [
            "cookie ingredients:",
            "1 cup margarine, softened",
            "2/3 cup sugar",
            "1 t vanilla",
            "2 eggs",
            "2 cups flour",
            "white glaze:",
            "1 cup confectionary sugar",
            "1/2 t vanila",
            "2 T boiling water",
            "1 T oil",
            "drop of lemon juice",
            "chocolate glaze",
            "3/4 cup confectionary sugar",
            "2 T boiling water",
            "4 t cocoa",
            "1/2 T oil"
        ],
        "instructions": [
            "cream margarine with sugar and eggs",
            "add vanilla and flour",
            "form into 1 and 1/2 inch balls and place on tray",
            "bake 10-15 minutes and cool",
            "turn over and frost flat side",
            "allow to dry before storing or serving",
        ],
        "foodCategory": "dessert",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    var blondies = new Recipe();
    blondies.save({
        "recipeName": "Blondies",
        "BakeTime": 20,
        "BakeTemp": 350,
        "ingredientList": [
            "3 eggs",
            "2/3 cup canola oil",
            "1 box light brown sugar",
            "1 t vanilla",
            "2 1/2 t baking powder",
            "2 2/3 cup flour",
            "1 package chocolate chips",
            "1/2 cup raisins",
        ],
        "instructions": [
            "cream eggs, oil , and sugar",
            "add vanilla, baking powder and flour",
            "slowly add chcolate chips and raisins while stirring until desired consistancy",
            "pour into pan and bake",
        ],
        "foodCategory": "dessert",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "if you use a larger cookie sheet, the blondies will bake faster and you may want to reduce baking time",
    }, {});


    //---------------appetizers-------------------
    //--------------soups---------------------

    var potatoSoup = new Recipe();
    potatoSoup.save({
        "recipeName": "Potato Soup",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "2 onions, diced",
            "2-3 potatoes",
            "1/2 cup fine egg noodles",
            "2 T flour",
            "1/2 t pepper",
            "2 T oil",
            "1 T salt",
            "1 quart water",
            "sour cream or shreded cheese, optional",
        ],
        "instructions": [
            "saute onion in oil",
            "add flour and stir carefully until lightly browned",
            "slowly add 1-2 cups of water",
            "add potatoes, salt, pepper, and remaining water",
            "bring to a boil, add noodles and reduce heat",
            "just before serving, add milk",
            "top with sour cream or shredded cheese to taste",
        ],
        "foodCategory": "appetizer",
        "eventTheme": "weeknight",
        "Kosher": true,
        "Passover": false,
        "lowFat": true,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": false,
        "recipeTricks": "",
    }, {});

    var barleySoup = new Recipe();
    barleySoup.save({
        "recipeName": "Tomato-Barley Soup",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "1 onion",
            "2 stalks celery",
            "2 carrots",
            "1 potato",
            "1 green pepper",
            "1/2 cup barley",
            "2 cans tomato sauce",
            "salt, cayene pepper, cumin, oregano to taste",
            "2 frozen cubes each of cilantro and parsley",
            "8 cups water",
        ],
        "instructions": [
            "chop vegetables and onion",
            "saute onion until lightly browned",
            "add vegetables and saute several minutes",
            "add barley, tomato sauce and seasonings",
            "add water and bring to a boil",
            "reduce to a simmer and cook for about 1 hour",
        ],
        "foodCategory": "appetizer",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": true,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    //-----------------salads----------------------

    var beanSalad = new Recipe();
    beanSalad.save({
        "recipeName": "Three bean Salad",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "1 can green beans",
            "1 can corn",
            "1 can kidney beans",
            "1 can yellow wax beans",
            "1/3 c oil",
            "1/3 c lemon juice or vinegar",
            "1/3 c sugar or splenda",
            "1/4 t pepper",
            "1/4 t garlic",
            "1/2 t salt",
            "1 t parsley",
        ],
        "instructions": [
            "combine canned vegetables in a large bowl",
            "combine dressing ingredients and pour over salad",
            "mix well and serve",
        ],
        "foodCategory": "side",
        "eventTheme": "weeknight",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": true,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    var ceasarSalad = new Recipe();
    ceasarSalad.save({
        "recipeName": "Non-Dairy Ceasar Salad",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "1 bag pre-cut romain lettuce",
            "1/4 cup olive oil",
            "1 T lemon juice",
            "3 T mayo",
            "1 t dry mustard",
            "1 T dry parsley",
            "1 cup croutons",
        ],
        "instructions": [
            "place lettuce in a large bowl",
            "combine salad ingredients and pour over lettuce",
            "mix well",
            "top with croutons just before serving",
        ],
        "foodCategory": "side",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": true,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    //-----------------main------------------
    var pizza = new Recipe();
    pizza.save({
        "recipeName": "Quick Pizza Dough",
        "BakeTime": 20,
        "BakeTemp": 425,
        "ingredientList": [
            "2 1/2 cups flour",
            "1 T salt",
            "1 T sugar",
            "1 cup water",
            "1 T oil",
            "2 t yeast"
        ],
        "instructions": [
            "combine wet ingredients in bread machine",
            "add dry ingredients except for yeast on top",
            "make a small hole in the flour for yeast",
            "set machine on dough setting until end of cycle or well mixed",
            "sprinkle a generous amount of flour on a try and roll out dough into desired shape",
            "add your own toppings for pizza and bake"
        ],
        "foodCategory": "main",
        "eventTheme": "weeknight",
        "Kosher": true,
        "Passover": false,
        "lowFat": true,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipTricks": "",
    }, {});

    var nycChicken = new Recipe();
    nycChicken.save({
        "recipeName": "NYC Chicken Cutlets",
        "BakeTime": 30,
        "BakeTemp": 375,
        "ingredientList": [
            "1 lb. chicken cutlets",
            "1/2 cup each of bread crumbs and corn flake crumbs, combined",
            "marinade:",
            "3 T ketchup",
            "1/4 cup canola oil",
            "1 T jelly",
            "3 T white wine",
            "salt and pepper to taste",
            "1 t basil",
        ],
        "instructions": [
            "mix marinade ingredients until smooth and pour over chicken",
            "refrigerate at least 1/2 hour",
            "dredge cutlets in crumb mixture",
            "place on baking sheet and bake for 20 minutes",
            "flip and bake another 10 minute",
        ],
        "foodCategory": "main",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": false,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    var shellsBroccoli = new Recipe();
    shellsBroccoli.save({
        "recipeName": "Pasta Shells with Broccoli",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "1 package pasta shells, cooked",
            "1 onion, chopped",
            "1/4 cup oil",
            "2 cups chopped broccoli",
            "1-2 cloves minced garlic",
            "2 T chopped parsley",
            "1/2 t salt",
            "3 T flour",
            "3/4 cup milk",
            "1 package cottage cheese",
            "6 oz. shredded mozzarella cheese",
            "1/2 t oregano",
        ],
        "instructions": [
            "saute onion in oil",
            "add garlic, broccoli and seasonings",
            "add flour and stir until lightly browned",
            "add milk and mix well",
            "add cottage cheese and simmer until curds are melted",
            "add mozzarella cheese and stir well",
            "add cooked pasta and stir thoroughly for a few minutes, until heated through",
        ],
        "foodCategory": "main",
        "eventTheme": "weeknight",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": false,
        "recipeTricks": "For a low-fat option, use fat-free cottage cheese and reduce amount of oil.  Omit mozzarella cheese.",
    }, {});

    var tilapia = new Recipe();
    tilapia.save({
        "recipeName": "Tomato and Basil Tilapia",
        "BakeTime": 60,
        "BakeTemp": 400,
        "ingredientList": [
            "1 lb. tilapia or flounder fillets",
            "fresh or dry basil",
            "2 roma tomatoes",
            "1 onion",
            "season salt, cayene pepper and garlic powder to taste",
            "olive oil",
        ],
        "instructions": [
            "rinse fish fillets and arrange in baking dish",
            "drizzle with olive oil and spices",
            "slice onion and tomatoes, and place on top of fish",
            "bake for 1 hour or until onions are slightly carmelized",
        ],
        "foodCategory": "main",
        "eventTheme": "weeknight",
        "Kosher": true,
        "Passover": true,
        "lowFat": true,
        "lowCarb": true,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    //------------miscellaneous-------------------
    var challah = new Recipe();
    challah.save({
        "recipeName": "Challah",
        "BakeTime": 20,
        "BakeTemp": 350,
        "Passover": false,
        "ingredientList": ["3 cups flour", "1 t salt", "1/3 cup sugar", "2/3 cup water", "1 egg", "1/3 cup oil", "2 1/4 t yeast"],
        "instructions": ["combine wet ingredients in bread machine",
            "add dry ingredients except for yeast on top",
            "make a small hole in the flour for yeast",
            "set machine on dough setting until end of cycle or well mixed"
        ],
        "foodCategory": "miscellaneous",
        "eventTheme": "weeknight",
        "Kosher": true,
        "Passover": false,
        "lowFat": false,
        "lowCarb": false,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});

    var garlicDip = new Recipe();
    garlicDip.save({
        "recipeName": "Garlic-Mayo Dip",
        "BakeTime": 0,
        "BakeTemp": 0,
        "ingredientList": [
            "2 cups mayo",
            "2-3 cloves garlic",
            "drop of lemon juice",
            "salt and pepper to taste",
            "1 bunch assorted fresh herbs, cleaned and dried, optional",
            "1/4 cup milk or water, optional",
        ],
        "instructions": [
            "combine all ingredients in food proccessor",
            "blend until smooth",
            "drizzle some water or milk if needed to help blend",
            "transfer to a tightly sealed container",
        ],
        "foodCategory": "miscellaneous",
        "eventTheme": "weeknight",
        "Kosher": true,
        "Passover": true,
        "lowFat": false,
        "lowCarb": true,
        "vegetarian": true,
        "dairyFree": false,
        "recipeTricks": "To make this recipe dairy-free, use almond milk or water",
    }, {});

    var babaganoush = new Recipe();
    babaganoush.save({
        "recipeName": "Fresh Babaganoush",
        "BakeTime": 180,
        "BakeTemp": 300,
        "ingredientList": [
            "1 large eggplant",
            "2 cloves garlic",
            "1/2 cup mayo",
        ],
        "instructions": [
            "rinse and trim eggplant and place in baking dish",
            "cover bottom with 1/2 inch of water",
            "wrap garlic cloves in foil and place in the baking dish",
            "bake for 2-3 hours until very soft",
            "open eggplant and scoop out inside, place in a mixing bowl",
            "peel garlic and mash together with eggplant",
            "let cool and add mayo, mixing well",
        ],
        "foodCategory": "miscellaneous",
        "eventTheme": "holiday",
        "Kosher": true,
        "Passover": true,
        "lowFat": false,
        "lowCarb": true,
        "vegetarian": true,
        "dairyFree": true,
        "recipeTricks": "",
    }, {});
}

//--------------------------------------------------------------
// var newRecipe = new Recipe();
// newRecipe.save({
//     "recipeName": ,
//     "BakeTime": ,
//     "BakeTemp": ,
//     "ingredientList": [],
//     "instructions": [],
//     "foodCategory": ,
//     "eventTheme": ,
//     "Kosher": ,
//     "Passover": ,
//     "lowFat": ,
//     "lowCarb": ,
//     "vegetarian": ,
//     "dairyFree": ,
//     "recipeTricks": ,
// }, {});
