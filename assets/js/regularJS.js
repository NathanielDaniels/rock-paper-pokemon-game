//Pokemon Database
var pokemonDB = [
    {
        name: 'charmander',
        type: 'fire',
        hp: 39,
        attack: 52,
        defense: 43,
        level: 1,
        img: "http://www.smogon.com/dex/media/sprites/xy/charmander.gif",
    },
    {
        name: 'Bulbasaur',
        type: 'grass',
        hp: 45,
        attack: 49,
        defense: 49,
        level: 1,
        img: "http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif",
    },
    {
        name: 'Squirtle',
        type: 'water',
        hp: 44,
        attack: 48,
        defense: 65,
        level: 1,
        img: "http://www.smogon.com/dex/media/sprites/xy/squirtle.gif",
    },
]

// set up selections
var gameState = {
    userPokemon: "",
    rivalPokemon: "",
}
// selecting .character Elements
var pokemonsEl = document.querySelector(".select-screen").querySelectorAll(".character");
var battleScreenEl = document.getElementById("battle-screen");
var attackBtnsEl = document.getElementById("battle-screen").querySelectorAll(".attack");
console.log(attackBtnsEl);


// selecting your pokemon (Initial Loop)
var i = 0;
while (i < pokemonsEl.length) {
    // Add Function to All Characters on Screen Select
    pokemonsEl[i].onclick = function () {
        // Current Selected Pokemons Name
        var pokeName = this.querySelector(".title").textContent;
        // Elements for Images on Battle Screen
        var player1Img = document.querySelector(".player1").getElementsByTagName("img");
        var player2Img = document.querySelector(".player2").getElementsByTagName("img");
        // Save Current Pokemone
        gameState.userPokemon = pokeName;
        // CPU Picks Pokemon
        cpuPick()
        // console.log(gameState);
        // Change Screen to Battle Screen
        battleScreenEl.classList.toggle("active");
        // Select Data from Current User Pokemon
        var currentPokemon = pokemonDB.filter( function (pokemon) {
            return pokemon.name == gameState.userPokemon
        })
        player1Img[0].src = currentPokemon[0].img
        // Select Data from Current CPU Pokemon
        var currentRivalPokemon = pokemonDB.filter( function (pokemon) {
            return pokemon.name == gameState.rivalPokemon
        })
        player2Img[0].src = currentRivalPokemon[0].img

        // User Choose Attack

        // CPU Health Drop

        // CPU Attack

        // User Health Drop

        // Rock > Scissors

        // Scissors > Paper

        // Paper > Rock

        // Depending on Pokemon Type/Defence, Depends on Damage

        // Health with <= 0 Loses
    }
    i++
}

// Select Attack
var a = 0;
while (a < attackBtnsEl.length) {
    attackBtnsEl[a].onclick = function () {
        var attackName = this.dataset.attack
        gameState.currentUserAttack = attackName
        // console.log(gameState.currentUserAttack);
        play(attackName, 'paper')
    }
    a++
}

var play = function (userAttack, cpuAttack) {
    switch (userAttack) {
        case 'rock':
            // console.log(userAttack)
            if (cpuAttack == 'paper') {
                console.log("Paper Beats Rock!")
            }
            if (cpuAttack == 'scissors') {
                console.log("Rock Beats Scissors!")
            }
            if (cpuAttack == 'rock') {
                console.log("Tie!")
            }
            break;
        case 'paper':
            if (cpuAttack == 'rock') {
                console.log("Paper Beats Rock!")
            }
            if (cpuAttack == 'scissors') {
                console.log("Scissors Beat Paper!")
            }
            if (cpuAttack == 'paper') {
                console.log("Tie!")
            }
            // console.log(userAttack)
            break;
        case 'scissors':
            if (cpuAttack == 'rock') {
                console.log("Rock Beats Scissors!")
            }
            if (cpuAttack == 'paper') {
                console.log("Scissors Beat Paper!")
            }
            if (cpuAttack == 'scissors') {
                console.log("Tie!")
            }
            // console.log(userAttack)
            break;
    }
}
// picks a number at random between min/max
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// adds the picked selection into (=) rivalPokemon
var cpuPick = function () {
    gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].querySelector(".title").textContent;
} 


//=============================================================



// create a formula for attacks
// console.log((attack * level) * stack / 7)



// create a formula for health
//HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
// console.log(((0.20 * Math.sqrt(level)) * defense) * 15)




// let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// p1 vs p2




// when one user loses all his health declare a winner


