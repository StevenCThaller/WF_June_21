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
var playedCards = [];
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
        var newCardElement = document.createElement("div");
        var newCardImg = document.createElement("img");
        
        newCardImg.src = './images/card_back.jpg';
        newCardImg.alt = "Card Back";
        // newCardImg.handIndex = cardHand.length - 1;
        newCardImg.pokemonName = cardToAdd.name;
        newCardImg.classList.add("card");
        
        newCardImg.addEventListener("click", flipCard)
        newCardElement.appendChild(newCardImg);
        handDiv.appendChild(newCardElement);
        cardsPushed++;
    }
}

function flipCard(e){
    var cardElements = getHandCardElements();
    var cardIndex = cardElements.findIndex(caEl => caEl.contains(e.target));
    var card = cardHand[cardIndex];
    var cardImg = e.target;
    card.flipped = !card.flipped;
    if(card.flipped) {
        cardImg.src = card.imagePath;
        cardImg.alt = card.name;

        var playCardButton = document.createElement("button");
        playCardButton.innerText = "Play " + card.name;
        playCardButton.addEventListener("click", playCard);
        cardElements[cardIndex].appendChild(playCardButton);
    } else {
        cardImg.src = "./images/card_back.jpg";
        cardImg.alt = "Card Back";

        cardElements[cardIndex].removeChild(cardElements[cardIndex].lastChild);
    }
}

function playCard(e) {
    // The card we want to play is the event target
    var aCard = e.target.parentElement;

    // we need to figure out which card in our hand this is (by its index)
    var cardIndex = 0;

    // increment our cardIndex until we're at an element with no previous sibling
    while( aCard.previousSibling != null && aCard != null) {
        aCard = aCard.previousSibling;
        cardIndex++;
    }
    // we are going to want to target the element that contains all of our card elements
    var handElement = document.getElementById("hand");
    // and also the array of individual html elements for the next step
    var handCardElements = getHandCardElements();

    // the card we want to play is the one returned by running removeChild() on the
    // handElement, with the card at cardIndex from our array of elements being the argument
    var cardPlayed = handElement.removeChild(handCardElements[cardIndex])

    console.log(cardPlayed);

    // Now, we want to add that card to our played cards (in html), so let's target that element
    var playedCardsElement = document.getElementById("playedCards");

    // Now, let's go ahead and remove the card from our cardHand array in this script file,
    // and add it to the playedCards array also in this script file
    playedCards.push(cardHand.splice(cardIndex, 1)[0]);

    // then, remove the button from the cardPlayed HTML element by targeting its last child
    cardPlayed.removeChild(cardPlayed.lastChild);
    // then, target the image inside of that cardPlayed element (i.e. its first child), and remove the flipCard
    // event listener that's attached to it
    cardPlayed.firstChild.removeEventListener("click", flipCard);
    // Then finally, add the card elmenet to our playedCards html element
    playedCardsElement.appendChild(cardPlayed);

    console.log(cardHand);
    console.log(playedCards);
}

function getHandCardElements(){
    return Array.prototype.slice.call(document.getElementById('hand').children);
}