// Image Basics
// Ethan Meachem
// 2/26/2025

//Globals
let lionL, LionR;
let pinImages = []; //0-8
let currentFrame=0;
let facing = "left";

function preload(){
  //function runs and wont end until all file loading is complete
  lionL = loadImage("assets/lion-left.png");
  lionR = loadImage("assets/lion-right.png");

  for(let i=0;i <= 8; i++){
    pinImages.push(loadImage("assets/pin-0" + i + ".png"));
  }

}


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawLion();
  //Pinwheel code
  image(pinImages[currentFrame], width/2, height/2);
  if(frameCount % 3 === 0){
    currentFrame++;
    if(currentFrame > 8) currentFrame = 0;
  }
}

function drawLion(){
  imageMode(CENTER);
  let sizeX = lionL.width / 2;
  let sizeY = lionL.height / 2;
  if(movedX > 0) facing = "right";
  else if(movedX < 0) facing = "left";

  if(facing === "left"){
    image(lionL,mouseX,mouseY, sizeX , sizeY);
  }
  if(facing === "right"){
    image(lionR,mouseX,mouseY, sizeX , sizeY);
  }
}