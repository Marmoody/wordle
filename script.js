const words = ["Hallo", "Spargel", "Automobil", "Fahrzeug", "Arbeiten", "Hannes", "Mama", "Tod", "Du", "Straßenverkehr"];
const game = document.getElementById('game');
const btn = document.getElementById('button');
let numOfLetters = 0;
let chosenWord;
let custid = 0;
let singleLetters = [];

const chooseWord = () => {
    chosenWord = words[Math.floor(Math.random()* words.length)];
    return chosenWord;
}

const countLetters = () => {
    numOfLetters = chosenWord.length;
    return numOfLetters;
}

const appendDivs = () => {
    for (let i = 0; i < numOfLetters; i++) {
        custid++;
        let div = document.createElement('div');
        div.classList.add('divTwo');
        div.setAttribute('id', custid)
        game.appendChild(div);
        game.style.width = (numOfLetters * 65) + "px";
    }
}

const clear = () => {
    let child = game.firstElementChild;
    while (child) {
        game.removeChild(child);
        child = game.firstElementChild;
    }
}

const letters = () => {
    singleLetters = Array.from(chosenWord);
    for (let i = 0; i < chosenWord.length; i++) {
        let lDiv = document.getElementById(divId);
    }
}

const playGame = () => {
    clear();
    chooseWord();
    countLetters();
    appendDivs();
    letters();
}

btn.addEventListener('click', playGame);
