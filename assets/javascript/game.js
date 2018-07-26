var wordTracker = -1;
var correctLetterCount = 0;
var lengthOfWord = 0;
var remainingGuesses = 12;
var guessedLetters = "";
var wordBox = document.getElementById("theWord");
var guessBox = document.getElementById("guessedLetters");
var remainBox = document.getElementById("guessesRemaining");
var currentWord = "";
var wordBank = [
    "lions",
    "tigers",
    "ford",
    "chrysler",
    "pistons",
    "eminem",
    "motown",
]

// Initialize all of the variables for every new word
function setUp() {
    wordTracker++;
    remainingGuesses = 12;
    remainBox.textContent = remainingGuesses;
    correctLetterCount = 0;
    currentWord = wordBank[wordTracker];
    lengthOfWord = currentWord.length;
    var totalHTML = "";
    guessedLetters = "";
    guessBox.innerHTML = "";
    for(i = 0; i < currentWord.length; i++){
        totalHTML += "<span class=\"" + currentWord[i] + "\" style=\"padding: 10px\">-</span>";
    }
    wordBox.innerHTML = totalHTML;
}

setUp();
document.onkeyup = function(key){
    var guess = key.key;
    if (guessedLetters.indexOf(guess) === -1){
        if(currentWord.indexOf(guess) === -1){
            guessedLetters += guess;
            guessBox.innerHTML += "<span class=\"letterBox\" style=\"padding: 3px\">" + guess + ",</span>";
            if(remainingGuesses > 0){
                remainingGuesses--;
                remainBox.textContent = remainingGuesses;
            }
            else{
                alert("You failed!")
                setUp();
            }
        }
        else{
            var correctLetters = document.getElementsByClassName(guess);
            guessedLetters + guess;
            for(i = 0; i < correctLetters.length; i++){
                correctLetters[i].innerHTML = guess.toUpperCase();
                correctLetterCount++;
            }
        }
    }

    if(correctLetterCount === lengthOfWord){
        alert("Word is done!");
        setUp();
    }
};