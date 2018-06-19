// key event function listening for keys
$(document).ready(function () {
                  document.onkeyup = function (event) {

                        var userGuess = event.key.toLowerCase();
                        console.log(userGuess);

                        if (!userGuess.match(/[a-zA-Z]/)) {
                              alert("Please only enter letters")
                        } else {

                              // setting up variables for letters guessed, word, user wins in an object

                              var game = {
                                    wins: 0,
                                    words: ["John Snow", "Cersei", "You know nothing", "dragon", "imp", "iron throne", "westeros", "Game of Thrones"],
                                    currentWords: currentWord,
                                    guessesRemaining: 10,
                                    lettersGuessed: ""
                              }

                              // choosing words at random and setting to a variable

                              var randomWord = game.words[Math.floor(Math.random() * game.words.length)];

                              // Placing randomWord into an object where the keys will be the characters and values will be "_"

                              var charMap = {};

                              for (let char of randomWord) {
                                    charMap[char] = "_ ";
                                    if (userGuess == char) {
                                          charMap[char] = userGuess + ' ';
                                    } else if(char == " "){
                                          charMap[char] = "  ";
                                    } else { game.lettersGuessed += userGuess;
                                          game.guessRemaining--;
                                    }
                              };

                              var currentWord = Object.values(charMap).join('');
                              console.log(currentWord);
 

                              
                              // jQuery pointers setup
                              $("#word-guess h1").text("Word: " + currentWord);
                              $("#wins h2").text("Wins: " + game.wins);
                              $("#guessesRemaining h3").text("Number of guesses remaining: " + game.guessesRemaining);
                              $("#letters-guessed h3").text("Letters already guessed: " + game.lettersGuessed);

                              if (game.guessesRemaining == 0) {
                                    alert("GAME OVER!");
                                    setTimeout(function () {
                                          game.guessesRemaining = 10;
                                          randomWord = game.words[Math.floor(Math.random() * items.length)];
                                          game.lettersGuessed = '';
                                    }, 30000);
                              } else if (!Object.values(charMap).includes("_")){
                                    alert("WINNER!");
                                    setTimeout(function () {
                                          game.guessesRemaining = 10;
                                          randomWord = game.words[Math.floor(Math.random() * items.length)];
                                          game.lettersGuessed = '';
                                          wins++;
                                    }, 30000);
                              } else { return};
                        }
                  };
            });
            // creating an object with randomGuess objects char being keys and values being _

            // the values will be looped and projected to screen. 

            // If the value is guessed, it will change to the CharacterData

            // else the guess will be logged in letters-guessed, the guessRemaining will incrament down, 

            // if guesses = 0 then prompt gameover ,reset randomWord
            // if word to guess object value doesn't hold "_" prompt winner and incrament winner up, reset random word

            //ignore spaces

            //have it not run for all