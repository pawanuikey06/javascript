let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const submitGuessButton = document.getElementById('submitGuess');
const guessInput = document.getElementById('guessInput');
const resultMessage = document.getElementById('resultMessage');
const playAgainButton = document.getElementById('playAgain');

submitGuessButton.addEventListener('click', () => {
    const userGuess = parseInt(guessInput.value);
    attempts++;

    if (userGuess < 1 || userGuess > 100) {
        resultMessage.textContent = 'Please enter a number between 1 and 100.';
        return;
    }

    if (userGuess === randomNumber) {
        resultMessage.textContent = `Congratulations! You've guessed the number ${randomNumber} in ${attempts} attempts!`;
        playAgainButton.style.display = 'block';
        guessInput.disabled = true; // Disable input after winning
    } else if (userGuess < randomNumber) {
        resultMessage.textContent = 'Too low! Try again.';
    } else {
        resultMessage.textContent = 'Too high! Try again.';
    }

    guessInput.value = ''; // Clear the input field
});

// Play again functionality
playAgainButton.addEventListener('click', () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    resultMessage.textContent = '';
    guessInput.disabled = false;
    guessInput.value = '';
    playAgainButton.style.display = 'none';
});
