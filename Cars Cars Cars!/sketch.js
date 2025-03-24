// Cars Cars Cars!
// Ethan Meachem
// 3/21/2025

let myVehicle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myVehicle = new Car(1,"red",1,5);
}

function draw() {
  background(220);
  drawRoad();
  myVehicle.move();
  myVehicle.display();
}

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
      this.x = width; this.y = height/2 - random(0,190)
    }
  }

  action(){
    //calls all other functions in class

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
      this.speed =+ 1;
    }

  }

  speedDown(){
    if(this.speed >= 1){
      this.speed =- 1;
    }
  }

  changeColor(){
    this.color = color(random(255), random(255), random(255));
  }
}
