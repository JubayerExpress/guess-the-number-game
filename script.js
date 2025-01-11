let randomNumber = Math.floor(Math.random() * 100) + 1;
let attemptsLeft = 10;
let previousGuesses = [];

const guessInput = document.getElementById('guess');
const submitButton = document.getElementById('submit');
const restartButton = document.getElementById('restart');
const resultText = document.getElementById('result');
const previousGuessesText = document.getElementById('previousGuesses');
const attemptsText = document.getElementById('attempts');

function updateUI() {
  previousGuessesText.textContent = `Previous guesses: ${previousGuesses.join(', ')}`;
  attemptsText.textContent = `Attempts left: ${attemptsLeft}`;
}

function checkGuess() {
  const userGuess = Number(guessInput.value);
  
  if (userGuess < 1 || userGuess > 100) {
    resultText.textContent = "Please enter a number between 1 and 100.";
    return;
  }

  previousGuesses.push(userGuess);
  attemptsLeft--;

  if (userGuess === randomNumber) {
    resultText.textContent = "Congratulations! You guessed the number!";
    submitButton.style.display = "none";
    restartButton.style.display = "block";
  } else if (attemptsLeft === 0) {
    resultText.textContent = `Game over! The number was ${randomNumber}.`;
    submitButton.style.display = "none";
    restartButton.style.display = "block";
  } else if (userGuess > randomNumber) {
    resultText.textContent = "Too high! Try again.";
  } else {
    resultText.textContent = "Too low! Try again.";
  }

  guessInput.value = '';
  updateUI();
}

function restartGame() {
  randomNumber = Math.floor(Math.random() * 100) + 1;
  attemptsLeft = 10;
  previousGuesses = [];
  
  resultText.textContent = '';
  guessInput.value = '';
  
  submitButton.style.display = "block";
  restartButton.style.display = "none";
  
  updateUI();
}

submitButton.addEventListener('click', checkGuess);
restartButton.addEventListener('click', restartGame);
updateUI();

