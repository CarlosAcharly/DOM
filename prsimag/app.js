const images = document.querySelectorAll('.images img');
const userImage = document.getElementById('choiceuser');
const compuImage = document.getElementById('choicecompu');
const winnerDisplay = document.getElementById('winner');

const getChoiceUser = (e) => {
    const image = e.target;
    const choiceUser = image.getAttribute('data-id');
    const imageUser = image.src;

    // Mostrar la imagen del usuario
    userImage.src = imageUser;

    // Llamar a la función play
    play(choiceUser);
}

const play = (choiceUser) => {
    const choiceCompu = getComputerChoice();
    showCompuChoice(choiceCompu);
    
    // Determinar ganador
    const winner = getWinner(choiceUser, choiceCompu);
    winnerDisplay.textContent = winner;
}

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

const showCompuChoice = (choiceCompu) => {
    const imageCompu = `./${choiceCompu}.jpg` ; 
    compuImage.src = imageCompu;
}

const getWinner = (user, compu) => {
    if (user === compu) {
        return 'Empate';
    }
    if ((user === 'rock' && compu === 'scissors') ||
        (user === 'scissors' && compu === 'paper') ||
        (user === 'paper' && compu === 'rock')) {
        return 'Usuario';
    }
    return 'Computadora';
}

images.forEach(image => image.addEventListener('click', getChoiceUser));
