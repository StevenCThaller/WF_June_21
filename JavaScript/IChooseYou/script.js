var pokemon = [
    'Bulbasaur',
    'Ivysaur',
    'Venusaur',
    'Charmander',
    'Charmeleon',
    'Charizard',
    'Squirtle',
    'Wartortle',
    'Blastoise',
    'Caterpie',
    'Metapod',
    'Butterfree',
    'Weedle',
    'Kakuna',
    'Beedrill',
    'Pidgey',
    'Pidgeotto',
    'Pidgeot',
    'Rattata',
    'Raticate',
    'Spearow',
    'Fearow',
    'Ekans',
    'Arbok',
    'Pikachu',
    'Raichu',
    'Sandshrew',
    'Sandslash',
    'Nidoran-f',
    'Nidorina',
    'Nidoqueen',
    'Nidoran-m',
    'Nidorino',
    'Nidoking',
    'Clefairy',
    'Clefable',
    'Vulpix',
    'Ninetales',
    'Jigglypuff',
    'Wigglytuff',
    'Zubat',
    'Golbat',
    'Oddish',
    'Gloom',
    'Vileplume',
    'Paras',
    'Parasect',
    'Venonat',
    'Venomoth',
    'Diglett',
    'Dugtrio',
    'Meowth',
    'Persian',
    'Psyduck',
    'Golduck',
    'Mankey',
    'Primeape',
    'Growlithe',
    'Arcanine',
    'Poliwag',
    'Poliwhirl',
    'Poliwrath',
    'Abra',
    'Kadabra',
    'Alakazam',
    'Machop',
    'Machoke',
    'Machamp',
    'Bellsprout',
    'Weepinbell',
    'Victreebel',
    'Tentacool',
    'Tentacruel',
    'Geodude',
    'Graveler',
    'Golem',
    'Ponyta',
    'Rapidash',
    'Slowpoke',
    'Slowbro',
    'Magnemite',
    'Magneton',
    'Farfetchd',
    'Doduo',
    'Dodrio',
    'Seel',
    'Dewgong',
    'Grimer',
    'Muk',
    'Shellder',
    'Cloyster',
    'Gastly',
    'Haunter',
    'Gengar',
    'Onix',
    'Drowzee',
    'Hypno',
    'Krabby',
    'Kingler',
    'Voltorb',
    'Electrode',
    'Exeggcute',
    'Exeggutor',
    'Cubone',
    'Marowak',
    'Hitmonlee',
    'Hitmonchan',
    'Lickitung',
    'Koffing',
    'Weezing',
    'Rhyhorn',
    'Rhydon',
    'Chansey',
    'Tangela',
    'Kangaskhan',
    'Horsea',
    'Seadra',
    'Goldeen',
    'Seaking',
    'Staryu',
    'Starmie',
    'Mr-mime',
    'Scyther',
    'Jynx',
    'Electabuzz',
    'Magmar',
    'Pinsir',
    'Tauros',
    'Magikarp',
    'Gyarados',
    'Lapras',
    'Ditto',
    'Eevee',
    'Vaporeon',
    'Jolteon',
    'Flareon',
    'Porygon',
    'Omanyte',
    'Omastar',
    'Kabuto',
    'Kabutops',
    'Aerodactyl',
    'Snorlax',
    'Articuno',
    'Zapdos',
    'Moltres',
    'Dratini',
    'Dragonair',
    'Dragonite',
    'Mewtwo'
];
var deckOfPokemonCards = [];
var cardHand = [];
generateDeck();

function pokemonCardFactory(pokemonName, pokeDexNumber) {
    return {
        name: pokemonName,
        dexNum: pokeDexNumber,
        // dexNum: pokemon.indexOf(pokemonName)+1,
        imagePath: "./images/card_fronts/" + pokeDexNumber + "_" + pokemonName + ".jpeg",
        flipped: false,
        attackCard: function(pokemonCard){
            console.log(this.name + " attacks " + pokemonCard.name + "!");
        }
    }
}

function generateDeck() {
    deckOfPokemonCards = [];
    for(var i = 0; i < pokemon.length; i++) {
        deckOfPokemonCards.push(pokemonCardFactory(pokemon[i], i+1))
    }
}

function shuffleDeck() {
    for(var i = deckOfPokemonCards.length-1; i > 0; i--) {
        var randIndex = Math.floor(Math.random() * i)

        var temp = deckOfPokemonCards[i];
        deckOfPokemonCards[i] = deckOfPokemonCards[randIndex];
        deckOfPokemonCards[randIndex] = temp;
    }
}

function drawHand() {
    if(cardHand.length > 0){
        alert("You cannot draw a new hand if you already have one. Please discard and try again.")
        return;
    }

    var handDiv = document.getElementById("hand");
    var cardsPushed = 0;
    while(cardsPushed < 5 && deckOfPokemonCards.length > 0) {
        var cardToAdd = deckOfPokemonCards.pop()
        cardHand.push(cardToAdd);

        var newCardElement = document.createElement("img");
        
        newCardElement.src = './images/card_back.jpg';
        newCardElement.alt = "Card Back";
        // newCardElement.handIndex = cardHand.length - 1;
        newCardElement.pokemonName = cardToAdd.name;
        newCardElement.classList.add("card");
        
        newCardElement.addEventListener("click", flipCard)
        
        handDiv.appendChild(newCardElement);
        cardsPushed++;
    }

    console.log(cardHand);
}

function flipCard(e){
    var cardElements = Array.prototype.slice.call(document.getElementById('hand').children);
    var cardIndex = cardElements.indexOf(e.target);
    var card = cardHand[cardIndex];
    var cardElement = e.target;
    card.flipped = !card.flipped;
    if(card.flipped) {
        cardElement.src = card.imagePath;
        cardElement.alt = card.name;
    } else {
        cardElement.src = "./images/card_back.jpg";
        cardElement.alt = "Card Back";
    }
}