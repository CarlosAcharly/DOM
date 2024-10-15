//dibujar un frankestein
const liezo=document.querySelector('#lienzo');
const ctx=liezo.getContext('2d');

//tubo grande
ctx.fillStyle='green';
ctx.beginPath();
ctx.roundRect(350,115,100,150,10);
ctx.stroke();
ctx.fill();

//tubo pequeño
ctx.fillStyle='green';
ctx.beginPath();
ctx.roundRect(100,155,100,150,10);
ctx.stroke();
ctx.fill();

//pasto
ctx.fillStyle='green';
ctx.beginPath();
ctx.roundRect(0,250,600,80,10);
ctx.stroke();
ctx.fill();

//tierra
ctx.beginPath();
ctx.fillStyle='brown';
ctx.roundRect(0,325,600,80,8);
ctx.fill();
//entrada de tubo grande
ctx.beginPath();
ctx.fillStyle='green';
ctx.roundRect(345,115,110,40, 10);
ctx.stroke();
ctx.fill();

//entrada de tubo pequeño
ctx.beginPath();
ctx.fillStyle='green';
ctx.roundRect(95,155,110,40, 10);
ctx.stroke();
ctx.fill();

//nubes
ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(100,50,15,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(120,50,15,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(85,50,15,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(130,55,15,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(100,60,15,20,Math.PI*2,true);
ctx.fill();

//nube 2
ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(450,40,15,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(420,50,15,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(430,50,15,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(440,55,15,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(455,60,15,20,Math.PI*2,true);
ctx.fill();

//hongo
ctx.beginPath();
ctx.fillStyle='pink';
ctx.roundRect(130,135,40,20, 10);
ctx.stroke();
ctx.fill();

ctx.fillStyle='red';
ctx.beginPath();
ctx.arc(150,128,25,15,Math.PI*2.2);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(160,128,5,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(135,128,5,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(150,115,5,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='black';
ctx.beginPath();
ctx.arc(143,148,3,20,Math.PI*2,true);
ctx.fill();
ctx.fillStyle='black';
ctx.beginPath();
ctx.arc(153,148,3,20,Math.PI*2,true);
ctx.fill();

//pixeles
ctx.beginPath();
ctx.fillStyle='#4b9808';
ctx.roundRect(560,310,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#4b9808';
ctx.roundRect(10,310,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#4b9808';
ctx.roundRect(90,310,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#4b9808';
ctx.roundRect(170,310,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#4b9808';
ctx.roundRect(250,310,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#4b9808';
ctx.roundRect(330,310,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#4b9808';
ctx.roundRect(400,310,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#4b9808';
ctx.roundRect(480,310,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#986a08';
ctx.roundRect(520,320,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#986a08';
ctx.roundRect(440,320,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#986a08';
ctx.roundRect(360,320,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#986a08';
ctx.roundRect(280,320,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#986a08';
ctx.roundRect(200,320,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#986a08';
ctx.roundRect(120,320,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='#986a08';
ctx.roundRect(50,320,20,20, 1);
ctx.fill();
 
//Mario #####################################
ctx.beginPath();
ctx.fillStyle='red';
ctx.roundRect(300,60,35,40, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='red';
ctx.roundRect(290,83,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='red';
ctx.roundRect(330,80,20,20, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='pink';
ctx.roundRect(297,40,40,30, 6);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='blue';
ctx.roundRect(297,25,40,20, 6);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='blue';
ctx.roundRect(305,35,40,10, 6);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='black';
ctx.roundRect(280,97,15,10, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='black';
ctx.roundRect(345,97,15,10, 1);
ctx.fill();

ctx.fillStyle='white';
ctx.beginPath();
ctx.arc(325,52,4,20,Math.PI*2,true);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='black';
ctx.roundRect(295,40,20,10, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='black';
ctx.roundRect(295,45,15,10, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='black';
ctx.roundRect(325,60,15,5, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='red';
ctx.roundRect(330,70,20,5.5, 1);
ctx.fill();

ctx.beginPath();
ctx.fillStyle='red';
ctx.roundRect(280,71,20,5.5, 1);
ctx.fill();

ctx.fillStyle='pink';
ctx.beginPath();
ctx.arc(280,73,4,20,Math.PI*2,true);
ctx.fill();

ctx.fillStyle='pink';
ctx.beginPath();
ctx.arc(280,73,4,20,Math.PI*2,true);
ctx.fill();