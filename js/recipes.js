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
    ]
}, {
    success: function(x) {
        alert("recipe with id " + x.id + " was added");
    },
    error: function(gameScore, error) {
        alert("recipe save failed");
    }
});

var pizza = new Recipe();
pizza.save({
    "recipeName": "Quick Pizza Dough",
    "BakeTime": ,
    "BakeTemp": ,
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
}, {});

var potatoKugel = new Recipe();
potatoKugel.save({
    "recipeName": "Invisible Vegetable Potato Kugel",
    "BakeTime": 1 1 / 2 "to"
    2 "hours",
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

var appleCrumble = new Recipe();
newRecipe.save({
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
    "foodCategory": "desset",
    "eventTheme": "holiday",
    "Kosher": true,
    "Passover": false,
    "lowFat": false,
    "lowCarb": false,
    "vegetarian": true,
    "dairyFree": true,
    "recipeTricks": "If you prefer less dough, you can add extra fruit and split the dough between 2 pans.",
}, {});

var broccoliKugel = new Recipe();
newRecipe.save({
    "recipeName": "Broccoli-Spinach Kugel",
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
newRecipe.save({
    "recipeName": "Red Cabbage Cole Slaw",
    "BakeTime": ,
    "BakeTemp": ,
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

var beanSalad = new Recipe();
newRecipe.save({
    "recipeName": "Three bean Salad",
    "BakeTime": ,
    "BakeTemp": ,
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
newRecipe.save({
    "recipeName": "Non-Dairy Ceasar Salad",
    "BakeTime": ,
    "BakeTemp": ,
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

var limaRice = new Recipe();
newRecipe.save({
    "recipeName": "Dill Rice with Lima Beans",
    "BakeTime": ,
    "BakeTemp": ,
    "ingredientList": [
"2 cups dry basmati rice",
    ],
    "instructions": [
"cook rice according to package directions",
    ],
    "foodCategory": ,
    "eventTheme": ,
    "Kosher": ,
    "Passover": ,
    "lowFat": ,
    "lowCarb": ,
    "vegetarian": ,
    "dairyFree": ,
    "recipeTricks": ,
}, {});
