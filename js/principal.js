var canvas = document.getElementById("Canvas");
var ctx = canvas.getContext("2d");



//posição inicial (x,y)
ctx.moveTo(600, 500);
//posição de parada, podem seradicionadas quantas forem necessárias
ctx.lineTo(900, 500);
ctx.lineTo(750, 250);
ctx.lineTo(600, 500);//estilo depreenchimento do traço
ctx.strokeStyle = "yellow";
//desenha o traço
ctx.stroke();



ctx.beginPath();
//define o arco da circunferência
// (x, y, raio, anguloInicial, anguloFinal [, anti-horário-> true/false])
// PI = 180, 2*PI = 360
ctx.arc(750, 400, 25, 0, 2 * Math.PI);
ctx.strokeStyle = "yellow";
//stroke desenha a forma vazia, fill preenche a forma
ctx.stroke();
ctx.font = "30px Arial";
ctx.strokeText("Iluminati", 690, 225);




//cria um elemento de Gradiente ( x0, y0, x1, y1)
var grd = ctx.createLinearGradient(0, 0, 750, 0);
//cor escala de 0(inicio) a 1(fim)
//pode ter cores intermediárias
grd.addColorStop(0, "yellow");
grd.addColorStop(1, "white");
// preenche com o estilo do gradiente
ctx.fillStyle = grd;
//desenha a forma com o gradiente
ctx.fillRect(500, 250, 50, 250);
ctx.strokeRect(500, 250, 50, 250);

// Cria o Gradiente (x0, y0, r0, x1, y1, r1);



var grd = ctx.createRadialGradient(950,250,310, 700,550,280);
    //escala de cores
    grd.addColorStop(0, "yellow");
    grd.addColorStop(1, "white");
    // define o estilo com o gradiente
    ctx.fillStyle = grd;
    //desenha a forma
    ctx.fillRect(950, 250, 50, 250);
    ctx.strokeRect(950, 250, 50, 250);




//define uma imagem
var img = new Image();
img.src = 'Iluminati.jpg';
img.onload = function(){
ctx.drawImage(img,500,250,50,50);};

var img2 = new Image();
    img2.src = 'olho.png';
    //define uma imagem
    img2.onload = function(){
    ctx.drawImage(img2,950,250,50,50);};
    //Define o carregamento da imagem e a posição inicial

// Cria um circulo
const circle = new Path2D();
circle.arc(750, 400, 23, 0, 2 * Math.PI);
ctx.fillStyle = 'black';
// adiciona event listener para o mouse
canvas.addEventListener('mousemove', function(event) {
// verifica se o cursos do mouse está no circulo
if (ctx.isPointInPath(circle, event.offsetX, event.offsetY)) {
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.moveTo(760, 395);
    ctx.quadraticCurveTo(750, 410, 740,395);
    ctx.strokeStyle = 'yellow';

}
else {
ctx.fillStyle = 'black';
ctx.beginPath();
ctx.strokeStyle = 'black';
}
ctx.fill(circle);
ctx.stroke();
});


