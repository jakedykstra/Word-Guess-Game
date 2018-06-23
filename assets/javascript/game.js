      
      // setting up variables for letters guessed, word, user wins, booleans, etc.

      var words = ["joffrey", "cersei", "arya", "dragon", "imp", "lanisters", "westeros", "stark", ];
      var totalGuesses = 10;
      var guessesRemaining = 0;
      var randomWord;
      var wordBeingGuessed = [];
      var lettersGuessed = [];
      var gameStart = false;
      var gameEnd = false;
      var wins = 0;




      // creating a reset game function
      function resetGame() {
            guessesRemaining = totalGuesses;
            gameStart = false;

            // Using Math.floor to round the random number down and select a word
            randomWord = Math.floor(Math.random() * (words.length));

            // Emptying guesses
            lettersGuessed = [];
            wordBeingGuessed = [];

            // Build the guessing word and clear it out
            for (var i = 0; i < words[randomWord].length; i++) {
                  wordBeingGuessed.push("_");
            }
            // Updating the html on the page
            updateDisplay();
      };




      // changing html upon event
      function updateDisplay() {

            $("#wins h2").text(`Wins: ${wins}`);
            $("#word-guess").text("");
            for (var i = 0; i < wordBeingGuessed.length; i++) {
                  document.getElementById("word-guess").innerText += wordBeingGuessed[i];
            }
            $("#guessesRemaining").text(`Number of guesses remaining: ${guessesRemaining}`);
            $("#letters-guessed").text(`Letters already guessed: ${lettersGuessed}`);
            if (guessesRemaining <= 0) {
                  alert("Sorry, you are out of guesses. Better luck next time!")
                  gameEnd = true;
            }
      };




      document.onkeyup = function (event) {
            var userGuess = event.key;
            console.log(userGuess);
            // If we finished a game, dump one keystroke and reset.
            if (gameEnd) {
                  resetGame();
                  gameEnd = false;
            } else {
                  // Check to make sure a-z was pressed.
                  if (userGuess.match(/[a-zA-Z]/)) {
                        makeGuess(userGuess.toLowerCase());
                        updateDisplay();
                        checkWin();
                        checkLoss();
                  } else {
                        alert("Please only enter letters");
                  }
            }
      };




      function makeGuess(letter) {
            if (guessesRemaining > 0) {
                  if (!gameStart) {
                        gameStart = true;
                  }

                  // Make sure we didn't use this letter yet
                  if (lettersGuessed.indexOf(letter) === -1) {
                        lettersGuessed.push(letter);
                        evaluateGuess(letter);
                  }
            }
      };



      // This function takes a letter and finds all instances of 
      // appearance in the string and replaces them in the guess word.
      function evaluateGuess(letter) {
            // Array to store positions of letters in string
            var positions = [];

            // Loop through word finding all instances of guessed letter, store the indicies in an array.
            for (var i = 0; i < words[randomWord].length; i++) {
                  if (words[randomWord][i] === letter) {
                        positions.push(i);
                  }
            }

            // if there are no indicies, remove a guess 
            if (positions.length <= 0) {
                  guessesRemaining--;
            } else {
                  // Loop through all the indicies and replace the '_' with a letter.
                  for (var i = 0; i < positions.length; i++) {
                        wordBeingGuessed[positions[i]] = letter;
                  }
            }
      };


      function checkWin() {
            if (wordBeingGuessed.indexOf("_") === -1) {
                  alert("Winner!!!");
                  wins++;
                  gameEnd = true;
                  resetGame();
            }
      };


      function checkLoss() {
            if (guessesRemaining <= 0) {
                  alert("Try again?")
                  gameEnd = true;
                  resetGame();
            }
      }