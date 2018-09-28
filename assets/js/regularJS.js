// set up selections
var gameState = {
    userPokemon: "",
    rivalPokemon: "",
}
// selecting .character
var pokemonsEl = document.querySelector(".select-screen").querySelectorAll(".character");
var battleScreenEl = document.getElementById("battle-screen");
var i = 0;

// selecting your pokemon by clicking one of three.
while (i < pokemonsEl.length) {
    pokemonsEl[i].onclick = function () {
        var pokeName = this.querySelector(".title").textContent;
        console.log(pokeName);
        gameState.userPokemon = pokeName;

        cpuPick()
        console.log(gameState);
        battleScreenEl.classList.toggle("active");
       
    }
    i++
}

// picks a number at random between min/max
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// adds the picked selection into (=) rivalPokemon
function cpuPick() {
    gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].querySelector(".title").textContent;
} 


//=============================================================
// pokemon
// create data for 3 different pokemons, with their names, type, weaknesses, health, and attack moves(name, attack stat, maximum)
var pokemons = [
    {
        name: 'charmander',
        type: 'fire',
        attack: 52,
        stamina: 39,
        level: 1
    },
    {
        name: 'Bulbasaur',
        type: 'leaf',
        attack: 52,
        stamina: 39,
        level: 1
    },
    {
        name: 'Squirtle',
        type: 'water',
        attack: 52,
        stamina: 39,
        level: 1
    },

]


var attack = 20;
var level = 10;
var stack = 1.3;
var stamina = 39;

// create a formula for attacks
console.log((attack * level) * stack / 7)



// create a formula for health
//HP = 0.20 x Sqrt(Pokemon_level) x (HP_base_stat)
console.log(((0.20 * Math.sqrt(level)) * stamina) * 15)




// let user choose 1 and then assign a random pokemon to battle thats not the users pokemon
// p1 vs p2




// when one user loses all his health declare a winner


