// Get elements
const guessInput = document.getElementById("guess");
const submitButton = document.getElementById("submit");
const resultText = document.getElementById("result");
const attemptsText = document.getElementById("attempts");

// Generate a random number between 1 and 100
const secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

// Function to handle the guess
function checkGuess() {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    resultText.textContent = "Please enter a valid number between 1 and 100.";
    resultText.style.color = "red";
    return;
  }

  if (userGuess === secretNumber) {
    resultText.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    resultText.style.color = "green";
  } else if (userGuess < secretNumber) {
    resultText.textContent = "Too low! Try again.";
    resultText.style.color = "orange";
  } else {
    resultText.textContent = "Too high! Try again.";
    resultText.style.color = "orange";
  }

  attemptsText.textContent = `Attempts: ${attempts}`;
}

// Attach event listener to the submit button
submitButton.addEventListener("click", checkGuess);
