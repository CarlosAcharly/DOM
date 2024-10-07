const images = document.querySelectorAll('.images img'); // Selecciona todas las imágenes

const getChoiceUser = (e) => {
    const image = e.target; // Obtiene la imagen clickeada
    const choiceUser = image.getAttribute('data-id'); // Obtiene el atributo 'data-id'
    const imageUserSrc = image.src; // Obtiene la fuente de la imagen

    // Pintar la imagen del usuario
    const imageUserDisplay = document.querySelector('#choiceuser');
    imageUserDisplay.src = imageUserSrc; // Muestra la imagen seleccionada por el usuario

    // Llamar a la función play
    play(choiceUser);
}

const play = (choiceUser) => {
    const choices = ['rock', 'paper', 'scissors'];
    const choiceCompu = choices[Math.floor(Math.random() * choices.length)]; // Elección aleatoria de la computadora

    // Pintar la imagen de la computadora
    const imageCompuDisplay = document.querySelector('#choicecompu');
    const compuImageSrc = `./${choiceCompu}.jpeg`; // Asume que los nombres de las imágenes siguen este formato
    imageCompuDisplay.src = compuImageSrc;

    // Determinar el ganador
    const winnerText = determineWinner(choiceUser, choiceCompu);
    
    // Mostrar el resultado
    const resultDisplay = document.querySelector('#winner');
    resultDisplay.textContent = winnerText;
}

const determineWinner = (user, compu) => {
    if (user === compu) {
        return "Empate";
    }
    if (
        (user === 'rock' && compu === 'scissors') ||
        (user === 'paper' && compu === 'rock') ||
        (user === 'scissors' && compu === 'paper')
    ) {
        return "Usuario";
    }
    return "Computadora";
}

// Añadir evento click a cada imagen
images.forEach(image => image.addEventListener('click', getChoiceUser));
