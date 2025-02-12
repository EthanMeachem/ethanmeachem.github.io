// Interactive Scene
// Ethan Meachem
// 2/11/2025


//Global Vars
let backdrop = 0;

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
}
else if(backdrop === 1){ 
  background(11,94,129);
}
else if(backdrop === 2){ 
  background(161, 189, 199);
}
else if(backdrop === 3){ 
  background(233,187,147);
}
//FOREGROUND
  //Initialization
noStroke();
rectMode(CENTER)
//Ground
fill(65,152,10);
rect(500,500, 1000, 200);
//trees
fill("brown");
rect(15,350,15,220);






//CHARACTER
voltorb(500,250,50);
}



//Character drawing function
function voltorb(x, y, width){
  fill("white");
  circle(x,y, width);
  fill("red");
  ellipse()
}




//INTERACTIVE FUNCTIONS
//press lmb to change backdrop
function mouseClicked(){
  if (mouseButton === LEFT){
    backdrop += 1;
  }
}

