//css centering
// Ethan Meachem
// 4/15/2025

let angle = 60;

function setup() {
  createCanvas(500, 500, WEBGL);
  angleMode(DEGREES);
  
}

function draw() {
  background(220);
  rotateX(frameCount);
  rotateY(frameCount);
  rotateZ(frameCount);
  for(let i = 0; i < 360; i +=30){
    push()
    rotate(i);
    boxFractal(40);
    pop()
  }
}

function boxFractal(size){
  if(size>3){
    rotateZ(angle);
    translate(size*1.5,0);
    box(size);
angle = map(mouseX, 0, width, -120, 120)
    boxFractal(size*0.8)
  }
}