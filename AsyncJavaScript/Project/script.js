let colorInterval;
// Function to generate a random hex color code
const generateRandomHexColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
document.querySelector('#start').addEventListener('click', () => {
    if(!colorInterval){
        colorInterval = setInterval(() => {
            document.body.style.backgroundColor = generateRandomHexColor();
        }, 2000);
    }  
});
document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(colorInterval); // Stop the color change
    colorInterval=null;
});
