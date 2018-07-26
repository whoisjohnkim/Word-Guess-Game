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
    console.log(currentWord);

    // Changes src for the image to reflect current word
    imageBox.src=wordBank[wordTracker].img;
    lengthOfWord = currentWord.length;
    var totalHTML = "";
    guessedLetters = "";
    guessBox.innerHTML = "";
    for(i = 0; i < currentWord.length; i++){
        totalHTML += "<span class=\"" + currentWord[i] + "\" style=\"padding: 5px\">-</span>";
    }
    wordBox.innerHTML = totalHTML;
}

setUp();
document.onkeyup = function(key){
    audioElement.load();
    var guess = key.key;
    if (guessedLetters.indexOf(guess) === -1){
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
        else{
            audioElement.play();
            var correctLetters = document.getElementsByClassName(guess);
            guessedLetters + guess;
            for(i = 0; i < correctLetters.length; i++){
                correctLetters[i].innerHTML = guess.toUpperCase();
                correctLetterCount++;
            }
        }
    }

    if(correctLetterCount === lengthOfWord){
        winTotal++;
        winBox.textContent = winTotal;
        setUp();
    }
};