// planets and moons demo
// Ethan Meachem
// 3/19/2025

//globals
let myPlanet;
let stars;

function setup() {
  createCanvas(windowWidth, windowHeight);
  stars = (width*height)/30;
  angleMode(DEGREES);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background("white");
  fill("grey");
  myPlanet.display();
}

// function drawStars(){
//   noFill();
//   stroke("black");
//   background("white");
//   for(i = 0; i<stars; i++){
//     let x = random(-10, width+10);
//     let y = random(-10, height+10);
//     let d = random(20,80);

//     circle(x,y,d);
//   }
//   starsDrawn = true;
// }

function mousePressed(){
  if(keyIsPressed && keyCode === SHIFT){
    myPlanet = new Planet(mouseX, mouseY);
  }
  else{
    myPlanet.createMoon();
  }
}

function keyPressed(){
  if(keyCode !== SHIFT){
    myPlanet.relocate(mouseX, mouseY);    
  }
}


class Planet{
  constructor(x,y){
    this.x=x; this.y=y; this.s= 100;
    this.moons=[];
  }

  display(){
    circle(this.x, this.y, this.s);

    for(let m of this.moons){
      m.update();
    }
  }

  createMoon(){
    this.moons.push(new Moon(this.x, this.y));
    
  }
  relocate(x, y){
    this.x = x; this.y = y;
    for (let m of this.moons){
      m.x = x, m.y = y;
    }
  }
}

class Moon{
  constructor(x,y){
    this.x = x; this.y = y; this.speed = 2;
    this.angle = 0; this.orbitRadius = 80; this.s = 25;
  }

  update(){
    this.move();
    this.display();
  }

  move(){
    this.angle += this.speed;
  }

  display(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    circle(this.orbitRadius, 0, this.s);
    pop();
  }
  
}