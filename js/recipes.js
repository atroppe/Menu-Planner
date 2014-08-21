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
    "eventTheme": "shabbat",
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
        "2 eggs"
        "3/4 cup oil"
        ""
    ],
    "instructions": [

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


Apple kugel
8 apples sliced
3T lemon juice
2t cinnamon(combine above ing)
4c flour
1½ c sugar
2 eggs
2t vanilla
1 c oil(above ing
    for dough)
1 layer dough,
1 layer apples,
1 layer dough
Bake 1 hr at 325

BROCCOLI SPINACH KUGEL
16 oz bag broccoli
16 oz bag spinach
1 chopped onion
1 c mayo
5 eggs
3 T onion soup
Pepper to taste
Up to½ c pareve milk
if needed

Red cabbage cole slaw
I don’ t really measure this one– just combine to taste
Abt 16 oz shredded cabbage¼ c sugar
3T cider vinegar½ cup mayo
Salt and pepper to taste


Bean salad dressing: 1 / 3 c oil
1 / 3 c lemon juice or vinegar
1 / 3 c sugar or splenda¼ tpepper¼ t garlic½ t salt
1 t parsley
