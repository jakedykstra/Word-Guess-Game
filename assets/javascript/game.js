// key event function listening for keys
$(document).ready(function () {
                  document.onkeyup = function (event) {

                        var userGuess = event.key.toLowerCase();
                        console.log(userGuess);

                        if (!userGuess.match(/[a-zA-Z]/)) {
                              prompt("Please enter a letter")
                        } else {

                              // setting up variables for letters guessed, word, user wins in an object

                              var game = {
                                    wins: 0,
                                    words: ["John Snow", "Cersei", "You know nothing", "dragon", "imp", "iron throne", "westeros", "Game of Thrones"],
                                    currentWords: "",
                                    guessesRemaining: 10,
                                    lettersGuessed: ""
                              }

                              // choosing words at random and setting to a variable

                              var randomWord = game.words[Math.floor(Math.random() * game.words.length)];

                              // Placing randomWord into an object where the keys will be the characters and values will be "_"

                              var charMap = {};

                              for (let char of randomWord) {
                                    charMap[char] = "_";
                                    if (userGuess == char) {
                                          charMap[char] = userGuess;
                                    } else {
                                          game.lettersGuessed += userGuess;
                                          game.guessRemaining--;
                                    }
                              };

                              if (game.guessesRemaining == 0) {
                                    prompt("GAME OVER!");
                                    setTimeout(function () {
                                          game.guessesRemaining = 10;
                                          randomWord = game.words[Math.floor(Math.random() * items.length)];
                                          game.lettersGuessed = '';
                                    }, 3000);
                              } else if (!charMap[char] == "_"){
                                    prompt("WINNER!");
                                    setTimeout(function () {
                                          game.guessesRemaining = 10;
                                          randomWord = game.words[Math.floor(Math.random() * items.length)];
                                          game.lettersGuessed = '';

                                    }, 3000);
                              };

                              
                              // jQuery pointers setup
                              $("#word-guess h1").text("Word: " + wordGuess);
                              $("#wins h2").text("Wins!: " + game.wins);
                              $("#guessesRemaining h3").text("Number of guesses remaining: " + game.guessesRemaining);
                              $("#letters-guessed h3").text("Letters already guessed: " + game.lettersGuessed);

                        }
                  };
            });
            // creating an object with randomGuess objects char being keys and values being _

            // the values will be looped and projected to screen. 

            // If the value is guessed, it will change to the CharacterData

            // else the guess will be logged in letters-guessed, the guessRemaining will incrament down, 

            // if guesses = 0 then prompt gameover ,reset randomWord
            // if word to guess object value doesn't hold "_" prompt winner and incrament winner up, reset random word