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

    const enemySelectionDiv = document.getElementById("enemySelectionBox");
    const enemyBox = document.getElementById("enemyBox");
    const attackButton = document.getElementById("attackButton");
    

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
            pokeDiv[i].addEventListener('click', pokemonClick);
        }

        
        attackButton.addEventListener('click', attackClick);
    }

    const pokemonClick = (e) => {
        const divClicked = e.currentTarget; //http://joequery.me/code/event-target-vs-event-currenttarget-30-seconds/
        if(!fighter){
            fighterSelected(divClicked);
            updateMessage("Select an opponent");
        }else if(!opponent && !divClicked.classList.contains('hero')){
            opponentSelected(divClicked);
            updateMessage("Fight to the death");
        }
    }

    const attackClick = () => {
        alert("you attacked!");
    }

    const fighterSelected = (divClicked) => {
        fighter = findPokemon(divClicked.id);
        divClicked.classList.add("hero");
        divClicked.classList.remove("selectable");
        const enemySelection = document.querySelectorAll(".character:not(.hero)"); //.hero not in quotes
        enemySelection.forEach((enemy) => {
            enemySelectionDiv.appendChild(enemy);
        });
    }

    const opponentSelected = (divClicked) => {
        opponent = findPokemon(divClicked.id);
        divClicked.classList.add("enemy");
        document.querySelectorAll(".character").forEach((character) => {
            character.classList.remove("selectable");
        });
                
        enemyBox.appendChild(divClicked);
        attackButton.style.visibility = "visible";
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


