const body = document.querySelector('body');
const btnChange = document.querySelector('#btnchange');
const span = document.querySelector('h1 span');

// Función para cambiar el color de fondo de forma aleatoria
const changeColor = () => {
    let color = '#';
    const letras = '123456789ABCDEF';
    
    for (let i = 0; i < 6; i++) {
        const aleatoria = Math.floor(Math.random() * 16);
        color += letras[aleatoria];
    }
    
    // Cambiar el color de fondo del body
    body.style.backgroundColor = color;
    // Mostrar el código del color en el span
    span.innerText = color;
}

// Agregar el evento al botón
btnChange.addEventListener('click', changeColor);
