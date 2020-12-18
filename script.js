"use strict";
window.addEventListener("DOMContentLoaded", init);

// initialise global variables
let aNumbers = [];
let oHTML = {};

function init(){
    // populate aNumbers
    for(let i = 1; i < 10; i++){
        aNumbers.push(i);
    }
    // populate oHTML
    oHTML.container = document.querySelector(".card-container");
    oHTML.template = document.querySelector("template");
    // event listeners
    document.querySelector("#shuffle").addEventListener("click", shuffle);
    document.querySelector("#sort").addEventListener("click", sort);

    display();
}

// colour defaults to root if not specified on colour()
function colour(iNumber){
    if(iNumber === 1 || iNumber === 8){
        return 1;
    }else if(iNumber === 3 || iNumber === 5 || iNumber === 9){
        return 2;
    }else if(iNumber === 6 || iNumber === 7){
        return 3;
    }else{
        return 0;
    }
}

function display(){
    oHTML.container.innerHTML = "";
    aNumbers.forEach(iNumber => {
        const clone = oHTML.template.cloneNode(true).content;
        const card = clone.querySelector(".card");
        card.textContent = iNumber;
        card.dataset.colour = colour(iNumber);
        oHTML.container.appendChild(clone);
    });
}

function shuffle(){
    // taken from https://flaviocopes.com/how-to-shuffle-array-javascript/
    aNumbers = aNumbers.sort(() => Math.random() - 0.5);
    display();
}

function sort(){
    aNumbers.sort();
    display();
}