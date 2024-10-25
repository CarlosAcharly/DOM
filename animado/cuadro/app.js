const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');

let tamaño = 1;
let sentido = true;
let color = 'black';

// Hacer crecer el cuadro
setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);

    // Cambiar el color dinámicamente en función del tamaño
    color = `hsl(${tamaño}, 100%, 50%)`; // Ajusta los parámetros de HSL para variar la intensidad

    ctx.fillStyle = color;
    ctx.fillRect(300 - tamaño / 2, 200 - tamaño / 2, tamaño, tamaño); // Dibujar el cuadro centrado

    if (sentido) {
        tamaño++;
    } else {
        tamaño--;
    }
    if (tamaño > 200) {
        sentido = false;
    }
    if (tamaño < 1) {
        sentido = true;
    }
}, 10);  // Ajuste a 10ms para hacer el crecimiento visible
