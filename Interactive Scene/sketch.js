// Interactive Scene
// Ethan Meachem
// 2/11/2025


//Global Vars
let backdrop = 0;
let explosionStatus = 0;

function setup() {
  createCanvas(1000, 500);
}

function draw() {
//BACKGROUND
  if(backdrop > 3){
    backdrop = 0;
  }
  else if(backdrop === 0){ 
    background(135, 206, 235);
    fill(255, 228, 132);
    circle(950,50, 300);
  }
  else if(backdrop === 1){ 
    background(11,94,129);
  }
  else if(backdrop === 2){ 
    background(161, 189, 199);
  }
  else if(backdrop === 3){ 
    background(233,187,147);
    fill(255, 228, 132);
    circle(500,400, 300);
  }

  //FOREGROUND
  //Initialization
  noStroke();
  rectMode(CENTER);
  //Ground
  fill(65,152,10);
  rect(500,500, 1000, 200);
  //trees
  tree(100,325, 100);


  //CHARACTER
  if (explosionStatus === 0){
    voltorb(500,415,125);
  }
  else if (explosionStatus === 1){
    explodingVoltorb(500,415,125);
  }
  else{
    explosionStatus = 0;
  }

}



//Character drawing function
function voltorb(x, y, w){
  //base
  fill("white");
  circle(x,y, w);
  //top
  fill("red");
  arc(x, y, w, w, PI, 0);
  //eyes
  fill("white");
  strokeWeight(w/50);
  stroke("black");
  arc(x-w/4, y-w/5, w/3, w/3, PI/6, 7*PI/6, CHORD);
  arc(x+w/4, y-w/5, w/3, w/3, 11*PI/6, 5*PI/6, CHORD);
  //pupils
  fill("black");
  noStroke();
  circle(x-w/4, y-w/6, w/15);
  circle(x+w/4, y-w/6, w/15);
}

function explodingVoltorb(x,y,w){}


function tree(x, y, size){
  fill("brown");
  rect(x,y,size/6,size*2);
  fill(153,193,79)
  circle(x,y/2,size*1.4)

}




//INTERACTIVE FUNCTIONS
//press lmb to change backdrop
function mousePressed(){
  if (mouseButton === CENTER){
    backdrop += 1;
  }
}

