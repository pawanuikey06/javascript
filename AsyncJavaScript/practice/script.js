let DateStart; // Declare DateStart in a broader scope

const duet = () => {
    console.log("Welcome To The World Of Fake Friends", Date.now());
}

document.querySelector('#start').addEventListener('click', () => {
    DateStart = setInterval(duet, 2000); // Assign interval to DateStart
});

document.querySelector('#stop').addEventListener('click', () => {
    clearInterval(DateStart); // Clear the interval when stop is clicked
});
