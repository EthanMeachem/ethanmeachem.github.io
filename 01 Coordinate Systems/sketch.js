// Coordinate System and User Events
// Ethan Meachem
// 2/6/2025
//Not run to completion, but interactive programs...

function setup() {
//runs once at the very beggining
  createCanvas(500, 500);
  //
}
let circleDiam = 100

function draw() {
  //draw LOOP, repeats over and over forever...
  //- target 60 frams per second
  // a new image is drawn at the bottom of the loop
  background(50);
  fiveCircle()
  //secret calculated delay()
  //skips delay if lagging
  //ACHIEVES FRAME RATE OF 60 FPS
}

function twoCircle(){
  //draws 2 circles, one at fexed location and one at mouse location
  fill(70,100,20) //PICKS COLOR
  circle(250,250, 50); //makes a circle(duh)
  fill(0,0,255)
  noStroke() //Removes outline
  circle(mouseY, mouseX, 20) //mousex/y follows mouse
  circle(mouseY, mouseX, 20)
}


function fiveCircle(){
  fill(150,0,150)
  circle(width, 0, circleDiam)
  circle(width, height, circleDiam)
  circle(0, 0, circleDiam)
  circle(0, height, circleDiam)
  circle(width/2, height/2, circleDiam)
}