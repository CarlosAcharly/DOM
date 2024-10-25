const inputRed = document.querySelector('#red');
const inputGreen = document.querySelector('#green');
const inputBlue = document.querySelector('#blue');
const body = document.querySelector('body');
const colorValue = document.querySelector('#colorValue'); // Selector para mostrar el valor del color

let redColor = 0;
let greenColor = 0;
let blueColor = 0;

const generateColor = () => {
    return `rgb(${redColor}, ${greenColor}, ${blueColor})`;
}

const updateBackgroundColor = () => {
    const color = generateColor();
    body.style.background = color;
    colorValue.innerText = color; // Actualiza el valor del color en el <span>
}

// Listeners para cada input de color
inputRed.addEventListener('change', (e) => {
    redColor = e.target.value;
    updateBackgroundColor();
});

inputGreen.addEventListener('change', (e) => {
    greenColor = e.target.value;
    updateBackgroundColor();
});

inputBlue.addEventListener('change', (e) => {
    blueColor = e.target.value;
    updateBackgroundColor();
});
