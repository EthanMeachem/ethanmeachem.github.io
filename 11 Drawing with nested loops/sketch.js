// Drawing with nested loops
// Ethan Meachem
// 3/7/2025

let gridSpacing = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  renderGrid();
}

function renderGrid(){
  //use nested loop to draw abjects in a grid arrangement
  for(let x = 0; x<width; x+=gridSpacing){
    for(let y = 0; y<height; y += gridSpacing){
      
      
      let d = roundDist(x,mouseX, y, mouseY)
      
      textAlign(CENTER,CENTER)
      text(d, x,y)
      if(d<200){
        fill("blue")
      }
      else{
        fill("red")
      }
      circle(x,y,gridSpacing);
    }
  }
}

function roundDist(x1,x2,y1,y2){
  let a = abs(x1-x2);
  let b = abs(y1-y2);
  let c = sqrt(a^2+b^2);
  return round(c);
}




