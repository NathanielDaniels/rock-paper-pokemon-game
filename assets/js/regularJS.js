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
// console.log(attackBtnsEl);


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
        gameState.currentPokemon = pokemonDB.filter( function (pokemon) {
            return pokemon.name == gameState.userPokemon
        })
        player1Img[0].src = gameState.currentPokemon[0].img
        // Select Data from Current CPU Pokemon
        gameState.currentRivalPokemon = pokemonDB.filter( function (pokemon) {
            return pokemon.name == gameState.rivalPokemon
        })
        player2Img[0].src = gameState.currentRivalPokemon[0].img

        // current user and cpu pokemon initial health
        gameState.currentPokemon[0].health = calculateInitialHealth(gameState.currentPokemon)
        gameState.currentRivalPokemon[0].health = calculateInitialHealth(gameState.currentRivalPokemon)


        console.log(gameState);
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
        play(attackName, cpuAttack())
    }
    a++
}

var cpuAttack = function() {
    var attacks = ['rock', 'paper', 'scissors']
    return attacks[randomNumber(0,3)]
}

var calculateInitialHealth = function(user) {
    // console.log(user[0].level);
    return ((0.20 * Math.sqrt(user[0].level)) * user[0].defense) * user[0].hp
}

var attackMove = function(attack, level, stack, critical, enemy) {
    console.log(enemy.name + ' before: ' + enemy.health)
    var attackAmount = ((attack * level) * (stack + critical)) / 2
    // (attack * level) * stack / 7
    enemy.health = enemy.health - attackAmount
    checkWinner(enemy.health)
    console.log(enemy.name + ' after: ' + enemy.health)
}

var checkWinner = function(enemyHealth) {
    if(enemyHealth <= 0) {
        console.log("Winner Winner Chicken Dinner")
    }
    
}

var play = function (userAttack, cpuAttack) {
    var currentPokemon = gameState.currentPokemon[0]
    var currentRivalPokemon = gameState.currentRivalPokemon[0]
    switch (userAttack) {
        case 'rock':
            if (cpuAttack == 'paper') {
                // User
                attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon)
                // CPU (Enemy)
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon)
            }
            if (cpuAttack == 'scissors') {
                // User
                attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon)
                // CPU (Enemy)
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon)
            }
            if (cpuAttack == 'rock') {
                // User
                attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon)
                // CPU (Enemy)
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon)
            }
            break;
        case 'paper':
            if (cpuAttack == 'rock') {
                // User
                attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon)
                // CPU (Enemy)
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon)
            }
            if (cpuAttack == 'scissors') {
                // User
                attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon)
                // CPU (Enemy)
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon)
            }
            if (cpuAttack == 'paper') {
                // User
                attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon)
                // CPU (Enemy)
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon)
            }
            break;
        case 'scissors':
            if (cpuAttack == 'rock') {
                // User
                attackMove(currentPokemon.attack, currentPokemon.level, .8, .5, currentRivalPokemon)
                // CPU (Enemy)
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 2, currentPokemon)
            }
            if (cpuAttack == 'paper') {
                // User
                attackMove(currentPokemon.attack, currentPokemon.level, .8, 2, currentRivalPokemon)
                // CPU (Enemy)
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, .5, currentPokemon)
            }
            if (cpuAttack == 'scissors') {
                // User
                attackMove(currentPokemon.attack, currentPokemon.level, .8, 1, currentRivalPokemon)
                // CPU (Enemy)
                attackMove(currentRivalPokemon.attack, currentRivalPokemon.level, .8, 1, currentPokemon)
            }
            break;
    }
}
// picks a number at random between min/max
var randomNumber = function(min, max) {
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


