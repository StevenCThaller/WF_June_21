var pokemon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];


// Using the array of pokemon (provided above) and loops, complete the following:
// 1. console.log the pokemon objects whose id is evenly divisible by 3 Hint: %
console.log("*********** Divisible By 3 *************")
for(var i = 0; i < pokemon.length; i++) {
    if(pokemon[i].id % 3 == 0) { // If a number divided by 3 gives a remainder of 0, it's divisible by 3
        console.log(pokemon[i]);
    }
}

// 2. console.log the pokemon objects that have more than one type
console.log("\n************* Two Types ****************")
for(var i = 0; i < pokemon.length; i++) {
    if(pokemon[i].types.length > 1) { // If the length of the types array is greater than 1
        console.log(pokemon[i]);
    }
}

// 3. console.log the names of the pokemon whose only type is "poison"
console.log("\n************* Only Poison ***************")
for(var i = 0; i < pokemon.length; i++) {
    // This one's a little tricky. Technically, you'd get the right output by just
    // checking if the type at index 0 is "poison" because only Ekans and Arbok match that,
    // and their only type is poison. BUT, if we added more pokemon, and a pokemon had a 
    // first type of poison, and second type something else, that would make our output wrong.

    // So, we use a compound conditional: 
    // check that the length of the types array is 1 AND that the type at index 0 is "poison"
    if(pokemon[i].types.length == 1 && pokemon[i].types[0] == "poison") {
        // then, print just the name
        console.log(pokemon[i].name);
    }
}

// 4. console.log the first type of all the pokemon whose second type is "flying"
console.log("\n********** Second Type Flying ************")
for(var i = 0; i < pokemon.length; i++) {
    // Javascript helps us in this one. Some languages will get fussy if you try and access
    // a value at an index that has no value (i.e. arr[5] when there are only 4 elements).
    // but javascript will lend us its loosely typed hand and say "well yeah, that's DEFINITELY not flying"
    if(pokemon[i].types[1] == "flying") {
        console.log(pokemon[i].types[0]);
    }
}

// Bonus: console.log the reverse of the names of the pokemon whose only type is poison.
console.log("\n*********** BONUS TIME WOO *************")
for(var i = 0; i < pokemon.length; i++) {
    // Same condition as number 3
    if(pokemon[i].types.length == 1 && pokemon[i].types[0] == "poison"){
        // Let's create a new empty string
        var nameToPrint = "";

        // then iterate through the name BACKWARDS
        for(var j = pokemon[i].name.length-1; j >= 0; j--) {
            // adding each character to our new string
            nameToPrint += pokemon[i].name[j];
        }

        // then, pring that string, which will be the pokemon's name backwards.
        console.log(nameToPrint);
    }
}
console.log("\n****************************************")

