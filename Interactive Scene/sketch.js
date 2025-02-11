// Interactive Scene
// Ethan Meachem
// 2/11/2025


//Global Vars
let backdrop = 1;



function setup() {
  createCanvas(1000, 500);
}

function draw() {
if(backdrop > 3){
  backdrop = 0;
}
else if(backdrop === 0){ 
  background(135, 206, 235);
}
else if(backdrop === 1){ 
  background(222, 102, 130);
}






}
