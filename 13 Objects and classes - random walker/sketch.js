// objects and classes - random walker
// Ethan Meachem
// 3/14/2025
// a first look at working with multiple objects

let singleWalker;
let walkers = [];
const NUM_WALKERS = 8000;

function setup() {
  createCanvas(windowWidth, windowHeight);
  singleWalker = new Walker(100, 150, "green");
  initWalkers();
  noStroke();
}


function initWalkers(){
  //create a bunch of walker objects put in walkers array
  for(let i = 0; i < NUM_WALKERS; i++){
    let c = color(random(255) , random(255), random(255));
    let w = new Walker(width/2, height/2, c);
    walkers.push(w);
  
  }
}


function draw() {
  // background(220);
  // singleWalker.move();
  // singleWalker.display();
  for(let currentWalker of walkers){//loop by item
    currentWalker.move();
    currentWalker.display();
  }

}



class Walker {
  //1. constuctor
  constructor(x, y, c){
    this.x = x; this.y = y; this.c = c;
    this.speed = random(20,21); this.size = 5;
  }

  //2. class methods
  display(){  //render the walker on the screen
    rectMode(CENTER);
    fill(this.c);
    square(this.x,this.y,this.size);

  }
  
  move(){
    //equally likely chance of up ⬆️⬇️➡️⬅️
    let choice = floor(random(4));    
    switch(choice){
    case 0: //LEFT
      this.x -= this.speed; break;
    case 1: //RIGHT
      this.x += this.speed; break;
    case 2: //UP
      this.y -= this.speed; break;
    case 3: //DOWN
      this.y += this.speed; break;

    }
  }
}