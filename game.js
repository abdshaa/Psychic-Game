//computer choices
var computerChoice = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];
//variables for wins, losses, letters guessed, guesses left
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var lettersGuessed = [];
var computerGuess = [];

//play
document.onkeydown = function(event) {
  var userGuess = event.key; //user input
  lettersGuessed.push(userGuess);
  var computerGuess = //computer guess
    computerChoice[Math.floor(Math.random() * computerChoice.length)];
  console.log(computerGuess[0]);

  if (userGuess === computerGuess[0] && guessesLeft > 0) {
    wins++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var computerGuess =
      computerChoice[Math.floor(Math.random() * computerChoice.length)];
    computerGuess.push(computerGuess);
    console.log(computerGuess[0]);
  } else if (userGuess === computerGuess[0] && guessesLeft > 0) {
    guessesLeft = guessesLeft - 1;
  } else {
    losses++;
    guessesLeft = 9;
    lettersGuessed.length = 0;
    computerGuess.length = 0;
    var computerGuess =
      computerChoice[Math.floor(Math.random() * computerChoice)];
    computerGuess.push(computerGuess);
    console.log(computerGuess[0]);
  }
  var html =
    "<p>Guess what letter I'm thinking of?</p>" +
    "<p>Wins: " +
    wins +
    "<p>Losses: " +
    losses +
    "<p>Guesses left: " +
    guessesLeft +
    "<p>Your guesses so far: " +
    lettersGuessed;
  document.querySelector("#game").innerHTML = html;
};
// Did not have enough time to try to fix the issue.
//Console reads property "push" undefined.
//Could not figure out the issue in time.
//
