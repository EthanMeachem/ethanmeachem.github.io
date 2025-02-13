// State Variables and Timing
// Ethan Meachem
// 2/13/2025


//global declarations
let shapeState = 1; // 1-circle   2-square  3-triangle   4-transition
let startTime, elapsedTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime= millis();
}

function manageTimer(){
  elapsedTime = millis() - startTime
  text(elapsedTime/1000, width*0.3, height*0.7);
}

function drawShape(){
 switch(shapeState){
  case 1: 
    circle(width/2, height/2, 150);
    break;
  case 2:
    square(width/2, height/2, 150);
    break;
  case 3:
    let x = width/2; let y = height/2;
    triangle(x-50, y+50, x+50, y+50, x, y-25);
    break;
  case 4:
    for(let i = 0; i < 20; i++){
      let x = random(width*0.4, width*0.6); let y = random(height*0.4, height*0.6);
      line(x,y,x+25, y);
    }
    break;
 } 
}
function keyPressed(){
  if(shapeState < 4){
    shapeState++;
    if (shapeState=== 4){
        startTime = millis();
  }
}
}

function draw() {
  background(220);
  drawShape();
  manageTimer();
  if(shapeState === 4 && elapsedTime > 2000){
    shapeState = 1;
  }
}

