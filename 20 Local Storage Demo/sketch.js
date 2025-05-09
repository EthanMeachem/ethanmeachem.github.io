// Local Storage Demo
// Ethan Meachem
// 4/16/2025

let x, y;
let xSpeed, ySpeed;
let totalBounces = 0;

function setup() {
  createCanvas(500, 600);
  x = width/2; y = height/2
  xSpeed = 60; ySpeed = 45;
  if(localStorage.getItem("numBounces")=== null){
    localStorage.setItem("numBounces", 0);
  }
  else{
    totalBounces = int(localStorage.getItem("numBounces"));
  }
  textSize(30); textAlign(CENTER,CENTER);
}

function draw() {
  background(220);
  updateBall();
  text(totalBounces, width/2, height/2);
}


function updateBall(){
  //calculate now pos
  x += xSpeed; y +=ySpeed;

  //check for bounce
  if(x < 0 || x > width){
    xSpeed *= -1;
    totalBounces++;
    localStorage.setItem("numBounces", totalBounces);
  }
  if(y < 0 || y > height){
    ySpeed *= -1;
    totalBounces++;
    localStorage.setItem("numBounces", totalBounces);
  }

  
  //draw circle
  circle(x,y,20)
}