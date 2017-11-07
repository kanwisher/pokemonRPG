// prompt(`




// ~~~~~~~~~~~~~~~~~~~~~~~~~~

// 'welcome to the pokemon rpg game!"
// --professor oak






// ~~~~~~~~~~~~~~





// (just hit cancel, messed up this part)

// `);
// alert(`




// to disable the alerts just click ok`);

const pokemonApp = (function(){

    function init(){
        addEventListeners();
        createPokemon();
    }

    const pokemonArray = [];
    let fighter = null;
    let opponent = null;

    function Pokemon (name, hp, baseAtk, counterAtk) {
        this.name = name;
        this.hp = hp;
        this.baseAtk = baseAtk;
        this.counterAtk = counterAtk;
        this.attack = baseAtk;
    }

    Pokemon.prototype.battle = (opponent) => {
        opponent.hp -= this.attack;
        this.hp -= opponent.counterAtk;
    }

    const createPokemon = () => {
        pokemonArray.push(new Pokemon('pikachu', 100, 15, 20));
        pokemonArray.push(new Pokemon('squirtle', 100, 15, 20));
        pokemonArray.push(new Pokemon('charmander', 100, 15, 20));
        pokemonArray.push(new Pokemon('bulbasaur', 100, 15, 20));
    }

    const findPokemon = (name) => {
        const filtered = pokemonArray.filter((el) => {
            return el.name === name;
        });
        return filtered[0]
    }    

    const addEventListeners = () => {        
        const pokeDiv = document.querySelectorAll(".character");
        for(let i = 0; i < pokeImage.length; i++){
            pokeImage[i].addEventListener('click', e => {
                const selected = e.target;
                if(!fighter){
                    fighter = findPokemon(selected.getAttribute('alt'));
                }else if(!opponent){
                    opponent = findPokemon(selected.getAttribute('alt'));
                }
            });
        }
    }   
    
    return init;
})()

document.addEventListener("DOMContentLoaded", function(){
    pokemonApp();
});


