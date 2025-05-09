// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  
}

function draw() {
background(222);
squareFractal(width/2,height/2,500);
}

function squareFractal(x,y,w){
  fill(x/3,y/3,w*3);
  square(x,y,w);

  if (w > 10){
    squareFractal(x-w/2, y-w/2,w/2);
    squareFractal(x-w/2, y+w/2,w/2);
    squareFractal(x+w/2, y-w/2,w/2);
    squareFractal(x+w/2, y+w/2,w/2);
  }
}