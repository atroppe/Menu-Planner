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

    //-------------

    $('body').on('click', 'input', function() {
        //.on('submit',...)
        var addRecipeToList = $(".saveRecipe").val();
        // alert("Recipe Saved!");
        console.log($('.saveRecipe'));
        console.log($('input'));
        console.log(addRecipeToList);
        userArray.push(addRecipeToList);
        console.log(userArray);
    });


    // var checkList = $('.saveRecipe');
    // checkList = [].slice.call(checkList);
    // console.log(checkList[0]);
    // checkList.forEach(function(box) {
    //     box.addEventListener('click', function(e) {
    //         console.log(e.value);
    //         userArray.push(e.value);
    //     });
    // })








    // var userList = userArray.forEach(function(recipe){
    //     $('.myMenu').create(?).append(li);
    // }