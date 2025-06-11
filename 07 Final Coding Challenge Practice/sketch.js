// Practice for Final Coding Challenge

// Classes and Objects
// Working with images/animations
// Keyboard and mouse interactions


// ----- Global Variables ------
let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

let idleIndex = 0; let swipeIndex = 0;
let gorillaState = 0; //0 = idle, 1 = swipe
let gorillaX = 200; 

let spiralObjects = []

function preload(){  //fill arrays with gorilla and spiral images
  //Gorilla Images First   1-6
  for (let i = 1; i <= 6; i++) {
    gorillaIdle.push(loadImage("assets/Gorilla/idle" + i + ".png"));
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe" + i + ".png"));
  }

  //Load Circle Next:   circle00.png  00-15
  for (let i = 0; i <= 15; i++) {
    if (i < 10) {
      spiralImages.push(loadImage("assets/Circle/circle0" + i + ".png"));
    }
    else {
      spiralImages.push(loadImage("assets/Circle/circle" + i + ".png"));
    }
  }
}


function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(100);
  drawGorilla();


  for(let i = 0; i < spiralObjects.length; i++){
    let s = spiralObjects[i]
    s.display()
  }
}

function keyPressed(){
  if (key === " "){
    if (gorillaState === 0) gorillaState = 1;
  }
}

function mousePressed(){
  spiralObjects.push(new Spiral(mouseX,mouseY))
}

function drawGorilla(){
  //render the gorilla at its position, choosing the correct image for animation playback.
  if (gorillaState === 0){
    image(gorillaIdle[idleIndex], gorillaX, height/2);
    if (frameCount % 10 === 0) idleIndex++;
    if (idleIndex+1 > gorillaIdle.length){
      idleIndex = 0;
    }
    
  }
  else if (gorillaState === 1){
    image(gorillaSwipe[swipeIndex], gorillaX, height/2);
    if (frameCount % 6 === 0) swipeIndex++;
    if (swipeIndex+1 > gorillaSwipe.length){
      swipeIndex = 0;
      gorillaState = 0;
    }
    
  }
}

class Spiral{
  constructor(x,y){
    this.x = x; this.y = y;
    this.currentFrame = 0;
    this.active = true
  }

  display(){
    if(this.currentFrame > 15){
      this.active = false
    }
    else{
      image(spiralImages[this.currentFrame], this.x, this.y);
      if(frameCount % 3 === 0) this.currentFrame++;
    }
  }
}