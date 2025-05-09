// Create a Fractal
// Ethan Meachem
// 4/16/2025

function setup() {
  angleMode(DEGREES);
  createCanvas(800, 800);
  stroke('green')
  
}

function draw() {
  background(200);
  translate(200,200);
  createFractal(0,0,500,0);
}
function createFractal(x,y,w,c){
  if(w > 10){
    fill(x*2,y/1.3,c,200);
    square(x,y,w);
    circle(x+w,y+w,w/4);
    translate(w/3,w/100-6);
    rotate(40);
    createFractal(0,0,w/1.1,c+15);
    createFractal(x+w/2,y+w/2,w/3,c+70);
  }
}