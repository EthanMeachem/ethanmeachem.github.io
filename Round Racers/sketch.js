// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let redRacer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  redRacer= new RoundRacer(5,"red");
}

function draw() {
  background(220);
  redRacer.move();
  redRacer.display();
}



class RoundRacer{
  constructor(speed,color){
    this.speed = speed; this.color = color;
    this.size;
    this.x = 0;
    this.y = random(100, height-100)
  }
  display(){
    fill(this.color);
    circle(this.x, this.y, 20);
  }

  move(){
    
    if(this.x<width){
      this.x+=this.speed;
    }
    else{
      this.x = 0
    }
  }
}