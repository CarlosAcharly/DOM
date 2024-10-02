const body=document.querySelector('body');
const btnChange=document.querySelector('#btnchange');
const span=document.querySelector('h1 span')

//ejercicio, hacer un programa que cambie de color de forma aleatoria en hexagecimal
const changeColor=()=>{
    let color='#';
    const letras='123456789ABCDEF'
    for (let i=0; i<6;i++){
    const aleatoria=Math.floor(Math.random()*16);
    color+=letras[aleatoria]
} 
body.style.backgroundColor=color;
span.innerText=color;
}
btnRandom.addEventListener('click', changeColor)