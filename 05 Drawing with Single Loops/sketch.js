// Drawing with Single Loops
// Ethan Meachem
// 2/24/2025



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  circleOutline();
}

function circleOutline(){
  //use a loop (for or while) to draw a line of cirlces side by side
let d = 40;
let xyStart = 0;
let xEnd = width;
let yEnd = height


//top circle
for(let x = xyStart; x <= xEnd; x += width/9){
  circle(x, 0, d);
}
//right circles
for(let y = xyStart; y <= yEnd; y += height/9){
  circle(width,y,d);
}
//bottom circles
for(let x = xyStart; x <= xEnd; x += width/9){
  circle(x, height, d);
}
//left circles
for(let y = xyStart; y <= yEnd; y += height/9){
  circle(0,y,d);
}
}

function gradientBackground(){
let h = 1;
for(let y = 0; y < height; y += h){
  let mappedY = map(y,0,height,0,255)
  let reversedY = map(y,0,height,255, 0)
  noStroke();
  fill(mappedY, reversedY, mouseX)
  rect(0,y,width,h);

}

}
