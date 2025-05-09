// Vector Visualization
// Ethan Meachem
// 5/5/2025

let objects = []

function setup() {
  createCanvas(windowWidth, windowHeight);
  objects.push(new Ball(width*0.1, height*0.5));
}

function draw() {
  background(200)
 if (mouseIsPressed){
  objects.push(new Ball(mouseX,mouseY));
 }

  for (let o of objects){
    o.move();
    o.display();
  }
}

class Ball{
constructor(x,y){
  this.pos = createVector(x,y);
  this.velocity = createVector(3,-8);
  this.grav = createVector(0,0.0981);
}

move(){
  this.velocity.add(this.grav);

  this.pos.add(this.velocity);

  // if(this.pos.x < 0 || )

}

display(){
  //display ball
  circle(this.pos.x, this.pos.y, 20);

  //display vectors
  stroke(255,0,0)
  line(0,0,this.pos.x, this.pos.y)

  stroke(0,0,255)
  }

}
