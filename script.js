const words = ["Hallo", "Spargel", "Automobil", "Fahrzeug", "Arbeiten", "Hannes", "Mama", "Tod", "Du", "Straßenverkehr"];
const game = document.getElementById('game');
const btn = document.getElementById('button');
let numOfLetters = 0;
let chosenWord;
let custid = 0;
let singleLetters = [];

//choose a random word from the words array
const chooseWord = () => {
    chosenWord = words[Math.floor(Math.random()* words.length)];
    return chosenWord;
}

//count the letters of the chosenWord to decide how many divs are needed to display
const countLetters = () => {
    numOfLetters = chosenWord.length;
    return numOfLetters;
}

//append number of divs equal to counted letters
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

//clears the gamefield and resets the game. Removes all divs from gamefield. Sets custom id of divs back to 0.
const clear = () => {
    let child = game.firstElementChild;
    while (child) {
        game.removeChild(child);
        child = game.firstElementChild;
    }
    custid = 0;
}

//inserts letters from chosen word into the divs.
/*const letters = () => {
    singleLetters = Array.from(chosenWord);
    for (let i = 0; i < chosenWord.length; i++) {
        let lDiv = document.getElementById(`${i + 1}`);
        lDiv.innerHTML = chosenWord[i];
    }
}*/

const playGame = () => {
    clear();
    chooseWord();
    countLetters();
    appendDivs();
    //letters();
}

btn.addEventListener('click', playGame);
