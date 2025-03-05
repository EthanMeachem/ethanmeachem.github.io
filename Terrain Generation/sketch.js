// Terrain Generation
// Ethan Meachem
// 3/3/2025

//globals
let time;
let rectWidth = 1;
let noiseSpeed = 0.01;
let noiseStart = 1;
let scrollSpeed = 0.05;
let peakX;
let peakY = 0;



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
  fill("black");
  stroke("black");
  peakY = 0;
  let av = 0;
  let rep = 0;

  for(let x = 0; x<width; x += rectWidth){
    let rectHeight = noise(time);
    rectHeight = map(rectHeight, 0, 1, 1, 2000);
    rect(x, height, rectWidth, rectHeight);
    time += noiseSpeed;
    av = av + rectHeight;
    rep++
    if(peakY < rectHeight){
      peakY =rectHeight;
      peakX = x; 
    }
  }
  drawFlag(peakX, height-peakY/2);
  average(av,rep);
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
  rect(x, y, 2, 40)
  
  fill("red")
  triangle(x,y-10,x,y-20,x+7,y-15)
}
function average(av, rep){
  let avY = (av/rep)/2;
  stroke("red")
  line(0, height-avY, width, height-avY);

}