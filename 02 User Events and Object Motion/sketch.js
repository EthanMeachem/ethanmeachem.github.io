// User Events
// Ethan Meachem
// 2/7/2025

//global variable declaration
//define your globals here
//you can only store primitive/simple data at this point

let tSize = 100; 
let x; //declaration only (SCOPEEE)
let y;



function setup() {
  createCanvas(windowWidth, windowHeight);

  x = width/2
  y= height/2
  rectMode(CENTER)
}

function draw() {
  background(255);
  print("Current frame: " + frameCount); //sends to console
  fill("Blue")
  textSize(tSize)
  text("skibidi " + mouseButton, 150, 150);// needs coordinate where to put text
  



  //KEYBOARD
  fill(100,150,175)
  square(x, y, 50, 5)

  if(keyIsDown(65)){
    x=x-5
  }
  if(keyIsDown(68)){
    x=x+5
  }
  if(keyIsDown(87)){
    y=y-5
  }
  if(keyIsDown(83)){
    y=y+5
  }
}


function mousePressed(){
  //called auto DO NOT CALL ON OWN
  tSize=random(5,100)
}