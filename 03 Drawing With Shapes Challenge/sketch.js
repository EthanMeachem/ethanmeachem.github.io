// Drawing With Shapes Challenge
// Ethan Meachem
// 2/10/2025

//GLOBAL VARIABLE DECLARATIONS
let charX = 200
let charY = 200
let charH = 100
let charW = 100
let charD = 10
let charRound = charW/2


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  drawCharacter();
}

function drawBox(){
  //DRAW A BOX ON THE SCREEN
  fill("red")
  rect(boxX,boxY, 50, 30, 5, 5, 0, 0)
  rect(boxX, boxY - 50, 30)
}

function keyPressed(){
  if(key === "a"){
    charH = charH*1.25;
    charW = charW*1.25;
    charD = charD*1.25;
    charX = charX*1.25;
    charY = charY*1.25;
    charRound = charW/2
  }
  if(key === "b"){
    charH = charH/1.25;
    charW = charW/1.25;
    charD = charD/1.25;
    charX = charX/1.25;
    charY = charY/1.25;
    charRound = charW/2
  }

}

function drawCharacter(){
//to practice drawing with shapes and understanding
//
noStroke();
fill(133, 242, 150)
rectMode(CENTER);
//body
rect(charX, charY,charW, charH, charRound, charRound, 0, 0);
//legRight
rect(charX*1.23, charY*1.25, charW/12, charH/2);
//legLeft
rect(charX/1.3, charY*1.25, charW/12, charH/2);
fill("black")
//eye
circle(charX/1.2, charY, charD)
circle(charX*1.15, charY, charD)
rect(charX, charY*1.1, charW/2, charH/50)

}a