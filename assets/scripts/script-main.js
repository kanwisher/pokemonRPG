// "use strict"
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

    const pokemonArray = [];
    let fighter = null;
    let opponent = null;
    const enemySelectionDiv = document.getElementById("enemySelectionBox");
    const enemyBox = document.getElementById("enemyBox");
    const attackButton = document.getElementById("attackButton");
    

    function init(){
        addEventListeners();
        createPokemon();
        updateHealth();
    }

    const addEventListeners = () => {        
        const pokeDiv = document.querySelectorAll(".character");
        for(let i = 0; i < pokeDiv.length; i++){
            pokeDiv[i].addEventListener('click', pokemonClick);
        }        
        attackButton.addEventListener('click', attackClick);

        const pokemonClick = (e) => { //see #1 //http://wesbos.com/arrow-function-no-no/
            const divClicked = e.currentTarget; //http://joequery.me/code/event-target-vs-event-currenttarget-30-seconds/
            if(!fighter){
                fighterSelected(divClicked);
                updateMessage("Select an opponent");
            }else if(!opponent && !divClicked.classList.contains('hero')){
                opponentSelected(divClicked);
                updateMessage("Fight to the death");
            }
        }
    
        const attackClick = () => { //see #1 //http://wesbos.com/arrow-function-no-no/
            fighter.battle(opponent);
            updateHealth();
            checkAlive();        
        }
    }

    const createPokemon = () => {

        function Pokemon (obj) {
            this.name = obj.name;
            this.hp = obj.hp;
            this.baseAtk = obj.baseAtk;
            this.counterAtk = obj.counterAtk;
            this.attack = obj.baseAtk;
        }
    
        Pokemon.prototype.battle = function(opponent) { //arrow function screws with 'this', see #3 http://wesbos.com/arrow-function-no-no/
            opponent.hp -= this.attack;
            this.attack += this.baseAtk;
            this.hp -= opponent.counterAtk;
        }

        characters.forEach((character) => {
            pokemonArray.push(new Pokemon(character));
        });

        console.log(pokemonArray);
    }

    const updateHealth = () => {
        pokemonArray.forEach((pokemon) => {
            document.querySelector(`#${pokemon.name} .hp`).textContent = pokemon.hp;
        })
    }

    const findPokemon = (name) => {
        const filtered = pokemonArray.filter((el) => {
            return el.name === name;
        });
        return filtered[0]
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

    const removePokemon = (name) => {

        const opponentDiv = document.getElementById(opponent.name);
        opponentDiv.parentElement.removeChild(opponentDiv);

        var index = pokemonArray.map((pokeObj) => {
            return pokeObj.name;
        }).indexOf(name);

        pokemonArray.splice(index, 1);
        opponent = null;
    }

    const checkAlive = () => {
        if(fighter.hp <= 0){
            gameOver();
        } else if(opponent.hp <= 0){
            killOpponent();
        }
    }

    const killOpponent = () => {       
        removePokemon(opponent.name);
        attackButton.style.visibility = "hidden";  
        if(pokemonArray.length === 1){
            gameWin();
        } else {  
        const enemySelection = document.querySelectorAll(".character:not(.hero)"); //.hero not in quotes
        enemySelection.forEach((enemy) => {
            enemy.classList.add("selectable");
        });
        updateMessage("Select an opponent");
        }              
    }

    const gameOver = () => {
        alert("you lose");
    }

    const gameWin = () => {
        updateMessage("You win!");
    }
    
    return init;
})()

document.addEventListener("DOMContentLoaded", function(){
    pokemonApp();
});


