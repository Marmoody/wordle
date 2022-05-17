const words = ["Hallo", "Spargel", "Automobil", "Fahrzeug", "Arbeiten", "Hannes", "Mama", "Tod", "Du", "Straßenverkehr"];
const game = document.getElementById('game');
const btn = document.getElementById('button');
const checkbtn = document.getElementById('checkButton');
let numOfLetters = 0;
let chosenWord;
let custid = 0;
let singleLetters = [];
let guessWord = [];


//choose a random word from the words array
const chooseWord = () => {
    chosenWord = words[Math.floor(Math.random()* words.length)].toLowerCase();
    return chosenWord;
}

//count the letters of the chosenWord to decide how many divs are needed to display
const countLetters = () => {
    numOfLetters = chosenWord.length;
    return numOfLetters;
}

//append number of divs equal to counted letters and append text input fields to divs
const appendDivs = () => {
    for (let i = 0; i < numOfLetters; i++) {
        custid++;
        let div = document.createElement('div');
        div.classList.add('divTwo');
        div.setAttribute('id', custid)
        game.appendChild(div);
        game.style.width = (numOfLetters * 65) + "px";
        let inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.className = "inputField";
        inputField.setAttribute('maxlength', 1);
        inputField.setAttribute('id', custid + 'i');
        div.appendChild(inputField);
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

//checks inputvalues with the letters of the chosen word. Changes background color of div.
const checkInputValues = () => {
    for (let i = 0; i < chosenWord.length; i++) {
        let inputFie = document.getElementById(`${i + 1}i`);
        let inputVal = inputFie.value.toLowerCase();
        guessWord.push(inputVal);
        console.log(guessWord);
        if (inputVal == chosenWord[i]) {
            inputFie.style.backgroundColor = "green";
        } else if (chosenWord.includes(inputVal)) {
            inputFie.style.backgroundColor = "yellow";
        } else if (inputVal == null || inputVal == "") {
            inputFie.style.backgroundColor = "red";
        } else {
            inputFie.style.backgroundColor = "red";
        }
    }
    if (guessWord.join('').toLowerCase() === chosenWord.toLowerCase()) {
        alert('Congrats!');
        clear();
    } else {
        guessWord = [];
        appendDivs();
    }
}

const playGame = () => {
    clear();
    chooseWord();
    countLetters();
    appendDivs();
    //letters();
}

btn.addEventListener('click', playGame);
checkbtn.addEventListener('click', checkInputValues);
