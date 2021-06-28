// Ok, that was a little bit tedious and kind of felt like wrangling 
// hyperactive kittens.

// There must be an easier way, right?

var chalupa = { // curly braces after = == object
    name: 'Chalupa',
    shellDensity: 'soft',
    shellIngredient: 'flour',
    meat: 'carne asada',
    hasCheese: true,
    salsa: 'fire sauce',
    hasGuac: true,
    veggies: [
        'lettuce', 
        'tomato'
    ],
    printInfo: function(){
        console.log(this.name + " Ingredients")
        console.log("Shell Density: " + this.shellDensity);
        console.log("Shell Ingredient: " + this.shellIngredient);
        console.log("Cheese: " + this.hasCheese);
        console.log("Salsa: " + this.salsa);
        console.log("Guac: " + this.hasGuac);
        console.log("Veggies: ");
        for(var i = 0; i < this.veggies.length; i++){
            console.log("\t" + this.veggies[i]);
        }
    },
    advertise: function() {
        console.log("ATTENTION ATTENTION!!");
        this.printInfo();
    }
}

// console.log(chalupa.shellDensity);

// // what about the more complex values??
// console.log(chalupa.veggies);

// // how to access data inside of a more complex data type inside of an object
// var nums = [ 1, 2, 3, 4, 5];
// // how do I grab an individual element from nums?
// nums[2];

// // well, if chalupa.veggies is an array, and we grab individual elements in an array
// // by thatArray[someIndex]
// console.log(chalupa.veggies[0]);

// // what about if the value of a key is a function??
// function test() {
//     console.log("this is a test");
// }

// // how would I execute that function?
// test();

// // following that same logic, if my chalupa has a key called printInfo, and its value is a function...
// chalupa.printInfo();

// chalupa.advertise();

var holyGuacamole = { // curly braces after = == object
    name: 'Holy Guacamole',
    shellDensity: 'hard',
    shellIngredient: 'corn',
    meat: 'avocado based chicken',
    hasCheese: false,
    salsa: 'liquified avocado juice',
    hasGuac: true,
    veggies: [
        'avocado'
    ],
    printInfo: function(){
        console.log(this.name + " Ingredients")
        console.log("Shell Density: " + this.shellDensity);
        console.log("Shell Ingredient: " + this.shellIngredient);
        console.log("Cheese: " + this.hasCheese);
        console.log("Salsa: " + this.salsa);
        console.log("Guac: " + this.hasGuac);
        console.log("Veggies: ");
        for(var i = 0; i < this.veggies.length; i++){
            console.log("\t" + this.veggies[i]);
        }
    },
    advertise: function() {
        console.log("ATTENTION ATTENTION!!");
        this.printInfo();
    }
}

chalupa.printInfo();
holyGuacamole.printInfo();