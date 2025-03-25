// Cars Cars Cars!
// Ethan Meachem
// 3/21/2025

let myVehicle;
let eastbound = [];
let westbound = [];
let theLight;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myVehicle = new Car(1,"red",1,5);
  for(let i = 0; i < 20; i++){
    let c = color(random(255), random(255), random(255));
    let w = new Car(floor(random(0,2)), c ,0, floor(random(1,16)));
    eastbound.push(w);
  }
  for(let i = 0; i < 20; i++){
    let c = color(random(255), random(255), random(255));
    let w = new Car(floor(random(0,2)), c ,1, floor(random(1,16)));
    westbound.push(w);
  }
  theLight = new Light();
}

function draw() {
  background(220);
  drawRoad();
  for(let currentCar of eastbound){
    currentCar.action();
  }
  for(let currentCar of westbound){
    currentCar.action();
  }
  
}

//add a car
function mousePressed(){
  if(keyIsPressed && keyCode === SHIFT){
    let c = color(random(255), random(255), random(255));
    westbound.push(new Car(floor(random(0,2)), c ,1, floor(random(1,16))));
  }
  else{
    let c = color(random(255), random(255), random(255));
    eastbound.push(new Car(floor(random(0,2)), c ,0, floor(random(1,16))));
  }
}
// red light



function drawRoad(){
  rectMode(CORNER);
  noStroke();
  fill("black");
  rect(0,height/2-200,width,400);
  fill("yellow");
  stroke("yellow");
  for(let i = 0; i < width; i+=40){
    line(i,height/2,i+20,height/2);
  }
  noStroke();
}

function drawCar(x,y,color){
  rectMode(CENTER);
  fill(color);
  rect(x,y,25, 10);
  fill("white");
  rect(x+8, y+6, 4, 1);
  rect(x-8, y+6, 4, 1);
  rect(x+8, y-6, 4, 1);
  rect(x-8, y-6, 4, 1);
}

function drawTruck(x,y,color){
  rectMode(CENTER);
  fill(color);
  rect(x,y,20, 15);
  rect(x+12,y, 3, 15);

}

class Car{
  constructor(carType, carColor, carDirection, carSpeed){
    this.type = carType; this.color = carColor; this.direction = carDirection; this.speed = carSpeed;
    //forward
    if(this.direction === 0){
      this.x = 0; this.y = height/2 + random(0,190);
    }
    //backwards
    else if(this.direction === 1){
      this.x = width; this.y = height/2 - random(0,190);
    }
  }

  action(){
    //calls all other functions in class
    if(theLight.lightColor === "green"){
      this.move();
    }
    if(floor(random(100)) === 1){
      this.speedUp();
    }
    if(floor(random(100)) === 1){
      this.speedDown();
    }
    if(floor(random(100)) === 1){
      this.changeColor();
    }
    this.display();
  }

  display(){
    //0 = car
    if(this.type === 0){
      drawCar(this.x, this.y, this.color);
    }
    //1 = truck
    else if(this.type === 1){
      drawTruck(this.x, this.y, this.color);
    }
  }

  move(){
    //right
    if(this.direction === 0){
      this.x += this.speed;
      if(this.x > width){
        this.x = 0;
      }
    }
    //left
    else if(this.direction === 1){
      this.x -= this.speed;
      if(this.x < 0){
        this.x = width;
      }
    }
  }

  speedUp(){

    if(this.speed <= 15){
      this.speed += 1;
    }

  }

  speedDown(){
    if(this.speed >= 1){
      this.speed -= 1;
    }
  }

  changeColor(){
    this.color = color(random(255), random(255), random(255));
  }
}

class Light{
  constructor(){
    this.lightColor = "green"; this.countDown = 0;
  }

  display(){
    if(this.countDown < 0){
      this.lightColor = "green";
    }
    rectMode(CENTER);
    fill("yellow");
    square(width/2, 200,50);
    fill(this.lightColor);
    circle(width/2, 200, 30);
    this.countDown -= 1;
  }

  redLight(){
// (light changed to red when space is pressed)
    this.lightColor = "red";
//change back after 120 frames
    this.countDown = 120;
    
  }
}