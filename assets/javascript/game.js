let name = prompt("What's your favorite NFL team?")
console.log("Go " + name);

name = alert("Go " + name + "!")
if (alert)
    // array
    var randomWord = [
        "vikings",
        "cowboys",
        "lions",
        "bears",
        "rams",
        "packers",
        "falcons",
        "saints",
        "eagles",
        "patriots",
        "chiefs",
        "steelers",
        "raiders",
        "seahawks",
        "browns",
        "broncos"
    ];
// gobal varibles
const attempts = 10;
var guessed = [];
var wordIndex;
var guessingWord = [];
var guessesLeft = 0;
var start = false;
var finished = false;
var wins = -1;

// get random word
function gameReset() {
    guessesLeft = attempts;
    start = false;

    wordIndex = Math.floor(Math.random() * (randomWord.length));

    guessed = [];
    guessingWord = [];

    for (var i = 0; i < randomWord[wordIndex].length; i++) {
        guessingWord.push("_");
    }
    update()
};
//elements
function update() {
    document.getElementById("winTotal").innerText = wins;
    document.getElementById("currentWord").innerText = "";
    for (var i = 0; i < guessingWord.length; i++) {
        document.getElementById("currentWord").innerText += guessingWord[i];
    }
    document.getElementById("guessesLeft").innerText = guessesLeft;
    document.getElementById("lettersGuessed").innerText = guessed;
    if (guessesLeft <= 0) {
        finished = true;

    }

};
//reset
document.onkeydown = function (event) {
    if (finished) {
        gameReset();
        finished = false;

    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase());
        }
    }
};
//guesses
function makeGuess(letter) {
    if (guessesLeft > 0) {
        if (start) {
            start = true;
        }
        if (guessed.indexOf(letter) === -1) {
            guessed.push(letter);
            evaluate(letter);

        }
    }
    // call functions
    update();
    checkWin();
};
// 
function evaluate(letter) {
    var position = [];

    for (var i = 0; i < randomWord[wordIndex].length; i++) {
        if (randomWord[wordIndex][i] === letter) {
            position.push(i);
        }
    }

    if (position.length <= 0) {
        guessesLeft--;

    }
    else {
        for (var i = 0; i < position.length; i++) {
            guessingWord[position[i]] = letter;
        }
    }
};
function checkWin() {
    if (guessingWord.indexOf("_") === -1) {
        wins++;
        finished = true;

    }
};




