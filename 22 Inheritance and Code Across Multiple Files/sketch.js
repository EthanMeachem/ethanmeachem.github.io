// Inheritance and Code Across Multiple Files
// Ethan Meachem
// 5/12/2025

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i=0; i <10; i++){
    objects.push(new AnimatedObject(random(width), random(height)))
    objects.push(new CircleObj(random(width), random(height)))
    objects.push(new LineObj())
  }
}

function draw() {
  background(220);
  for(let o of objects){
    o.move()
    o.display()
  }
}

//parent class ("super" class)
class AnimatedObject{
  constructor(x, y){
    this.x = x; this.y = y;
    this.size = 6;
  }

  move(){ //add "wiggle" effect
    this.x += random(-2,2);
    this.y += random(-2,2);
  }
  display(){
    strokeWeight(this.size)
    point(this.x, this.y)
  }
}



