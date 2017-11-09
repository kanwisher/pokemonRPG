"use strict"
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



    const createPokemon = () => {

        function Pokemon (obj) {
            this.name = obj.name;
            this.hp = obj.hp;
            this.baseAtk = obj.baseAtk;
            this.counterAtk = obj.counterAtk;
            this.attack = obj.baseAtk;
        }
    
        Pokemon.prototype.battle = (opponent) => {
            opponent.hp -= this.attack;
            this.hp -= opponent.counterAtk;
        }

        characters.forEach((character) => {
            pokemonArray.push(new Pokemon(character));
        });

        console.log(pokemonArray);
    }

    const findPokemon = (name) => {
        const filtered = pokemonArray.filter((el) => {
            return el.name === name;
        });
        return filtered[0]
    }    

    const addEventListeners = () => {        
        const pokeDiv = document.querySelectorAll(".character");
        for(let i = 0; i < pokeDiv.length; i++){
            pokeDiv[i].addEventListener('click', clickLogic);
        }
    }

    const clickLogic = (e) => {
        const divClicked = e.currentTarget; //http://joequery.me/code/event-target-vs-event-currenttarget-30-seconds/
        if(!fighter){
            fighterSelected(divClicked);
            updateMessage("Select an opponent");
        }else if(!opponent && e.currentTarget.getAttribute("status") !== "hero"){
            opponent = findPokemon(divClicked.id);
            updateMessage("Fight to the death");
        }
    }

    const fighterSelected = (divClicked) => {
        fighter = findPokemon(divClicked.id);
        divClicked.classList.add("hero");
        divClicked.classList.remove("selectable");
        const selection = document.querySelectorAll(".character:not('.hero')");
        console.log(selection);
        document.getElementById("enemySelectionBox").appendChild(selection);

    }

    const updateMessage = (text) => {
        const messageBox = document.getElementById("messageBox");
        messageBox.innerHTML = `<p> ${text} </p>`;
    }
    
    return init;
})()

document.addEventListener("DOMContentLoaded", function(){
    pokemonApp();
});


