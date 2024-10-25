const lienzo = document.querySelector('#lienzo');
const ctx = lienzo.getContext('2d');
ctx.font = "20px serif";
let contador = 0;

const snake = [{
    x: 2,
    y: 1,
    show: function () {
        ctx.fillText('👻', this.x * 20, this.y * 20);
    }
},
{
    x: 1,
    y: 1,
    xSig: 2,
    ySig: 1,
    show: function () {

        ctx.fillText('👻', this.x * 20, this.y * 20);

    }
},
{
    x: 0,
    y: 1,
    xSig: 1,
    ySig: 1,
    show: function () {

        ctx.fillText('👻', this.x * 20, this.y * 20);

    }
}]

const food = {
    x: 0,
    y: 0,
    show: function () {
        ctx.fillText('🍔', this.x * 20, this.y * 20)

    },
    aparece: function () {
        this.x = Math.ceil(Math.random() * 29);
        this.y = Math.ceil(Math.random() * 19) + 2;
        // generar
    }
}

function checkEat() {
    if (snake[0].x === food.x && snake[0].y === food.y ) {
        food.aparece();
        snake.push({ ...snake[1] });
         contador++;



    }

}
function nextMove(x, y) {
    snake.forEach((item, idx) => {
        if (idx === 0) {
            item.x = x;
            item.y = y;
        } else {
            item.x = item.xSig;
            item.y = item.ySig;
            item.xSig = snake[idx - 1].x;
            item.ySig = snake[idx - 1].y;
        }
    })
}
function checkSelfMuere() {

    for (let i = 1; i < snake.length; i++) {

        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            alert("¡Has perdido! La serpiente se ha tocado a sí misma.");
            //clearInterval(gameInterval);
            
        }
    }

}


function contador_comida(contador){
    console.log("el puntaje es: " + contador)
}

//validras direncion ala ves
let direncion = 1;
let x = 2;
let y = 1;

food.aparece();

setInterval(() => {
    ctx.clearRect(0, 0, 600, 400);
    nextMove(x, y);
    snake.forEach(i => i.show());
    food.show();
    checkEat();
    contador_comida(contador);
     
    

    checkEat()
    checkSelfMuere()
    if (direncion === 1) x++;
    else if (direncion === 2) y++;
    else if (direncion === 3) x--;
    else y--;
    

    if (x > 29) x = 0;
    if (x < 1) x = 29;
    if (y > 20) y = 1;
    if (y < 1) y = 20;


}, 200);

document.querySelector('body')
    .addEventListener('keydown', e => {
        if (e.key === 'ArrowRight') direncion = 1;
        if (e.key === 'ArrowDown') direncion = 2;
        if (e.key === 'ArrowLeft') direncion = 3;
        if (e.key === 'ArrowUp') direncion = 4;
        //validar tecla y cambiar direccion
    });