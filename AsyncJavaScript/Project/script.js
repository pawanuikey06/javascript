let colorInterval;

// Array of colors to switch between
const colors = ['#FF6347', '#1E90FF', '#32CD32', '#FFD700', '#8A2BE2', '#FF4500'];

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

document.querySelector('#start').addEventListener('click', () => {
    colorInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomColor();
    }, 2000);
});

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(colorInterval); // Stop the color change
});
