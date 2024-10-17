const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let radio = 1;
let sentido = true;
let color = 'black';

// Hacer crecer el círculo
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);

    // Cambiar el color dinámicamente en función del radio
    color = `hsl(${radio}, 100%, 50%)`; // Puedes ajustar los parámetros de HSL para variar la intensidad

    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(300, 200, radio, 0, Math.PI * 2, true);
    ctx.fill();

    if (sentido) {
        radio++;
    } else {
        radio--;
    }
    if (radio > 200) {
        sentido = false;
    }
    if (radio < 1) {
        sentido = true;
    }
}, 10);  // Ajuste a 10ms para hacer el crecimiento visible
