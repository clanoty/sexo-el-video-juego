let img;

//bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 20;
let raio = diametro / 2;

let xVelocidade = 5;
let yVelocidade = 5; 
//raquete 
let xRqt = 5;
let yRqt = 150;
let compRqt = 10;
let altRqt = 90;
//raquete oponente
let xRqtOp = 580;
let yRqtOp = 150
let veloRqtOp;
let colidiu = false;
// pontos
let meusPintos = 0;
let pintosOp = 0;
// songs
let somRqt;
let pinto;
let trilha;
let somRqtOp;

function preload(){
trilha = loadSound("trilha.mp3");
pinto = loadSound("ai.weba");
somRqt = loadSound("gozar.mp3");
somRqtOp = loadSound("gozar.mp3");
img = loadImage("capa.png")
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background("black");
  mostrarBolas (); 
  moviBolas ();
  pocpoc ();
  raquete(xRqt, yRqt);
  moviRqt();
  pocRqtBolls();
  raquete(xRqtOp ,yRqtOp);
  moviRqtOp();
  pocRqtBollsOp();
  placar();
  mataPintos();
}
function mostrarBolas () {
    circle (xBolinha,yBolinha,diametro);
    
  }

function moviBolas() {
  xBolinha += xVelocidade;
  yBolinha += yVelocidade;
}

function pocpoc() {
  if (xBolinha + raio > width || xBolinha - raio < 0) {
    xVelocidade *= -1;
    
  }
  if (yBolinha + raio > height || yBolinha - raio < 0){
    yVelocidade *= -1;
  }   
} 

function raquete(x, y){
  rect(x ,y, compRqt, altRqt)
  
}

function moviRqt(){
  if (keyIsDown(87)){
    yRqt -= 10;
  }if (keyIsDown(83)){
    yRqt += 10;
  }
}

function pocRqtBolls(){
  if (xBolinha - raio < xRqt + compRqt && yBolinha - raio < yRqt + altRqt && yBolinha + raio > yRqt - altRqt){
    xVelocidade *= -1
    somRqt.play();
  }
}

function moviRqtOp() {
    if (keyIsDown(UP_ARROW)){
    yRqtOp -= 10;
  }if (keyIsDown(DOWN_ARROW))
    yRqtOp += 10;
  }

function pocRqtBollsOp(){
    colidiu = collideRectCircle(xRqtOp, yRqtOp, compRqt, altRqt, xBolinha, yBolinha, raio);
if(colidiu){ 
 xVelocidade *= -1
  somRqt.play();
}
}

function placar(){
 stroke("#b7410e");
  textSize(16);
  textAlign(CENTER);
  fill("cyan");
  rect(150 ,10 ,40 ,20);
  fill("lightpink")
  text(meusPintos ,170 ,25);  
  fill("cyan");
  rect(450 ,10 , 40, 20);
  fill("lightpink")
  text(pintosOp , 470, 25);
  
  
}

function mataPintos(){
  if(xBolinha > 590 ){
    meusPintos += 1
    pinto.play();
}if (xBolinha < 10){
  pintosOp -= 1
  pinto.play();
}
}