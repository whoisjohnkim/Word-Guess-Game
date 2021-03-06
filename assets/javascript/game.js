var wordTracker = -1;
var correctLetterCount, lengthOfWord, winTotal = 0;
var remainingGuesses = 12;
var guessedLetters = "";
var wordBox = document.getElementById("theWord");
var guessBox = document.getElementById("guessedLetters");
var remainBox = document.getElementById("guessesRemaining");
var imageBox = document.getElementById("hintImg");
var winBox = document.getElementById("winTotal");
var currentWord = "";
var wordBank = [
    {
        name:"lions",
        img:"assets/images/lions.jpg"
    },
    {
        name: "tigers",
        img: "assets/images/tigers.png"
    },
    {
        name: "ford",
        img: "assets/images/ford.jpeg"
    },
    {
        name: "chrysler",
        img: "assets/images/chrysler.jpg"
    },
    {
        name: "pistons",
        img: "assets/images/pistons.jpg"
    },
    {
        name: "eminem",
        img: "assets/images/eminem.jpg"
    },
    {
        name: "motown",
        img: "assets/images/motown.jpg"
    }
]

// Create audio element for correct letter
var audioElement = document.createElement("audio");
audioElement.setAttribute("src", "assets/images/mynameis.mp3");

// Updates new word and resets all of the variables for every new word
function setUp() {
    wordTracker++;

    // Check to see if game is finished
    if(wordTracker >= wordBank.length){
        alert("You have guessed all the words correctly!");
        return;
    }
    remainingGuesses = 12;
    remainBox.textContent = remainingGuesses;
    correctLetterCount = 0;
    currentWord = wordBank[wordTracker].name;

    // Changes src for the image to reflect current word
    imageBox.src=wordBank[wordTracker].img;
    lengthOfWord = currentWord.length;
    guessedLetters = "";
    guessBox.innerHTML = "";

    // Adding dashes with correct format and number to the HTML
    var totalHTML = "";
    for(i = 0; i < currentWord.length; i++){
        totalHTML += "<span class=\"" + currentWord[i] + "\" style=\"padding: 5px\">-</span>";
    }
    wordBox.innerHTML = totalHTML;
}

setUp();
// Function that responds to a user's guess
document.onkeyup = function(key){
    // Reloads the audio element
    audioElement.load();

    var guess = key.key;
    // Check to see if the letter has been guessed before
    if (guessedLetters.indexOf(guess) === -1){
        // Check to see if the letter is in the target word
        if(currentWord.indexOf(guess) === -1){
            guessedLetters += guess;
            guessBox.innerHTML += "<span class=\"letterBox\" style=\"padding: 5px\">" + guess.toUpperCase() + ",</span>";
            if(remainingGuesses > 0){
                remainingGuesses--;
                remainBox.textContent = remainingGuesses;
            }
            else{
                alert("You failed!")
                setUp();
            }
        }
        // If not, add it to guessed letters and update the guessed letters box shown to user
        else{
            audioElement.play();
            var correctSpaces = document.getElementsByClassName(guess);
            guessedLetters += guess;
            for(var i = 0; i < correctSpaces.length; i++){
                correctSpaces[i].textContent = guess.toUpperCase();
                correctLetterCount++;
            }
        }
    }

    // Check to see if word is guessed completely
    if(correctLetterCount === lengthOfWord){
        winTotal++;
        winBox.textContent = winTotal;
        setUp();
    }
};