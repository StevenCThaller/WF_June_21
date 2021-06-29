// Hopefully, you remember that yesterday we learned a bit about objects
// More specifically, we learned how to access the data in an object.
var monster = {
    id: 1,
    name: "Bulbasaur",
    types: ["poison", "grass"]
};

// To access the name property of this object, we need to use dot notation
console.log(monster.name);

// And, to access the second type, we would use a combination of dot notation (for the 
// attribute of the object) and bracket notation (for the index within that array)
console.log(monster.types[1]);

// But what about if we flipped things around, and had objects inside of an array?
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

// If we wanted to console.log the names of the pokemon who have an id greater than 99,
// what should we do?
for(var i = 0; i < pokemon.length; i++) {
    if(pokemon[i].id > 99) {
        console.log(pokemon[i].name);
    }
}

var someObject = {
    name: "Cody", 
    "name.Last": "Thaller"
}

console.log(someObject[5]);