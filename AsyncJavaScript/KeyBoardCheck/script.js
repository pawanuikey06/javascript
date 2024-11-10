// Get references to the DOM elements
const keyName = document.getElementById('keyName');
const keyCode = document.getElementById('keyCode');
const clearButton = document.getElementById('clear');

// Event listener for keyboard key press
document.addEventListener('keydown', (event) => {
    keyName.textContent = `Key: ${event.key}`;
    keyCode.textContent = `Key Code: ${event.keyCode}`;
});

// Clear button to reset the displayed key information
clearButton.addEventListener('click', () => {
    keyName.textContent = 'Key: ';
    keyCode.textContent = 'Key Code: ';
});
7