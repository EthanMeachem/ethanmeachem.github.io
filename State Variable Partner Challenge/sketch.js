// State Variable Partner Challenge
// Ethan Meachem & Xinchen Yao
// 2/27/2025


//Globals
let facing = "right";
let directionX = 0;
let directionY = 0;
let squareW = 50;
let squareSpeed = 10;
let currentFrame =0;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  squareMove();
  currentFrame = frameCount;
}

function squareMove(){

  square(directionX,directionY,squareW);
  if(directionX<width-squareW){
    if(currentFrame % 3 === 0) {
      directionX += squareSpeed;
    }
  }
  else if(directionY<height-squareW){
    if(currentFrame % 3 === 0) {
      directionY+=squareSpeed;
    }
  }
  else if(directionY>=height-squareW){
    if(currentFrame % 3 === 0) {
      directionX -= squareSpeed;
    }
  }
  
}

function keyPressed(){
  if (key === "s"){
    if(squareSpeed >= 1){
      squareSpeed -= 5;
      if(squareSpeed < 1){
        squareSpeed = 1;
      }
    }
  }
  if (key === "w"){
    if(squareSpeed >= 1){
      squareSpeed += 5;
      if(squareSpeed > 30){
        squareSpeed = 30;
      }
    }
  }
}
