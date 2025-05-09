// Recursion - Fractals
// Ethan Meachem
// 4/14/2025

function setup() {
  createCanvas(windowWidth, windowHeight);
  // reCircle(width/2,height/2, width);
  // cantor(width*0.1, height*0.1, width*0.8, 10);
  circleFractal(width/2, height/2, height/1.5);
}

function draw() {

}

function reCircle(x,y,d){
  circle(x,y,d);
  if(d >= 10){
    reCircle(x,y,d*0.9);
  }
}

function cantor(x, y, len, depth){
  if(depth > 1){
    line(x,y,x+len, y);
    y+= 20;
    cantor(x,y,len/3,depth - 1);
    cantor(x+len*2/3,y,len/3,depth-1);
  }
}

function circleFractal(x,y,d){
  noFill()
  if(d > 1){
    circle(x,y,d);

    circleFractal(x-d/2, y, d/2.5);
    circleFractal(x+d/2, y, d/2.5);
    circleFractal(x, y-d/2, d/2.5);
    circleFractal(x, y+d/2, d/2.5);
    circleFractal(x, y, d/2.5);
  }
}