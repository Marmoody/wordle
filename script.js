const words = ["OFB", "G32", "Otto", "Wilde", "Arbeiten", "Düsseldorf", "Startup", "Grillen", "Steak", "Sizzle", "Fleisch", "Karl", "Mops", "Office", "DHDL", "Miele", "Kickstarter", "Backer", "Flagshipstore", "Unterbilk", "Tischtennis", "Darts", "Sales", "Logistik", "Außenküche", "Plattform", "Firlefanz", "Beef", "Oberhitzegrill", "Salz", "Revolutionär", "Modular", "Unternehmen", "Team", "RageCage", "Weihnachtsfeier" ];
const game = document.getElementById('game');
const btn = document.getElementById('button');
const checkbtn = document.getElementById('checkButton');
let numOfLetters = 0;
let chosenWord;
let custid = 0;
let singleLetters = [];
let guessWord = [];
let guesses = 0;
let count = 0;


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

const appendNewDivs = () => {
    let divBox = document.createElement('div');
    divBox.classList.add('divBox');
    game.appendChild(divBox);
    for (let i = 0; i < numOfLetters; i++) {
        custid++;
        let div = document.createElement('div');
        div.classList.add('divTwo');
        div.setAttribute('id', custid)
        divBox.appendChild(div);
        divBox.style.width = (numOfLetters * 65) + "px";
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
    guesses = 0;
    checkbtn.style.visibility = 'hidden';
    btn.style.visibility = 'visible';
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
    if (guesses === 0) {
        for (let i = 0; i < (chosenWord.length) * (guesses + 1); i++) {
            let inputFie = document.getElementById(`${i + 1}i`);
            let inputVal = inputFie.value.toLowerCase();
            guessWord.push(inputVal);
            console.log(guessWord);
            if (inputVal == chosenWord[i]) {
                inputFie.style.backgroundColor = "green";
            } else if (chosenWord.includes(inputVal)) {
                inputFie.style.backgroundColor = "yellow";
            } else if (inputVal == null || inputVal == "") {
                inputFie.style.backgroundColor = "#d12502";
            } else {
                inputFie.style.backgroundColor = "#d12502";
            }
        }
    } else {
        let j = 0;
        for (let i = (chosenWord.length * guesses); i < (chosenWord.length) * (guesses + 1); i++) {
            let inputFie = document.getElementById(`${i + 1}i`);
            let inputVal = inputFie.value.toLowerCase();
            guessWord.push(inputVal);
            console.log(inputVal);
            if (inputVal == chosenWord[j]) {
                inputFie.style.backgroundColor = "green";
            } else if (chosenWord.includes(inputVal)) {
                inputFie.style.backgroundColor = "yellow";
            } else if (inputVal == null || inputVal == "") {
                inputFie.style.backgroundColor = "red";
            } else {
                inputFie.style.backgroundColor = "red";
            }
            j++;
        }
    }
    
    if (guesses <= 4 && guessWord.join('').toLowerCase() === chosenWord.toLowerCase()) {
        alert('Glückwunsch, du hast es erraten!');
        clear();
    } else if (guesses === 4 && guessWord.join('').toLowerCase() != chosenWord.toLowerCase()) {
        alert('Game Over! Try Again!')
        clear();
    } else {
        guessWord = [];
        guesses++;
        appendNewDivs();
    }
}

const playGame = () => {
    clear();
    chooseWord();
    countLetters();
    appendNewDivs();
    checkbtn.style.visibility = 'visible';
    btn.style.visibility = 'hidden';
    //letters();
}

btn.addEventListener('click', playGame);
checkbtn.addEventListener('click', checkInputValues);
