// Find the smallest circle
// Ethan Meachem
// 3/5/2025

const NUM_CIRCLES = 250
let smallestDiameter = Infinity;
let smallX, smallY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawCircles();
}

function drawCircles(){
  noFill();
  for(let i = 0; i<NUM_CIRCLES; i++){
    //generate the next circle
    let x = random(0,width);
    let y = random(0, height);
    let d = random(20,80);

    circle(x,y,d);

    if(d < smallestDiameter){
      smallestDiameter = d;
      smallX = x; smallY = y;
    }
  }
  fill("red")
  circle(smallX,smallY,smallestDiameter);
}



function draw() {
  // background(220);
}
