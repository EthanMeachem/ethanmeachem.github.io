// Terrain Generation
// Ethan Meachem
// 3/3/2025

//globals
let time;
let rectWidth = 1;
let noiseSpeed = 0.01;
let noiseStart = 1;
let scrollSpeed = 0.05

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  time = noiseStart;
  noiseStart += scrollSpeed;
  background(220);
  generateTerrain();
}

function generateTerrain(){
  for(let x = 0; x<width; x += rectWidth){
    let rectHeight = noise(time);
    rectHeight = map(rectHeight, 0, 1, 1, 1000);
    rect(x, height, rectWidth, rectHeight);
    time += noiseSpeed;
    let peakX = x;
    let peakY = max(rectHeight);
    drawFlag(x , peakY);
  }
}

function keyPressed(){
  if(keyCode === RIGHT_ARROW & rectWidth <= 30){
    rectWidth = rectWidth*2, scrollSpeed = scrollSpeed/2;
  }
  else if(keyCode === LEFT_ARROW & rectWidth > 1){
    rectWidth = rectWidth/2, scrollSpeed = scrollSpeed*2;
  }
}

function drawFlag(x,y){
  rect(x, y, 1, 10)
}