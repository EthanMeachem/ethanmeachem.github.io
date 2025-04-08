// Array Basics
// Ethan MEachem
// 4/3/2025


let grid = 
[[0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0]];

 //array for green overlay
 let gridOverlay =
 [[0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0]];

let squareSize = 80;
const NUM_ROWS = 3; const NUM_COLS = 5; 

function setup() {
  createCanvas(NUM_COLS*squareSize, NUM_ROWS*squareSize);
  console.log("Make the squares all white or all black!");
  renderGrid();
  gridSetup();
}
//SET GRID TO RANDOM NUMBERS
function gridSetup(){
  for(row = 0; row < NUM_ROWS; row++){
    for(col = 0; col < NUM_COLS; col++){
      grid[row][col] = map(floor(random(2)),0,1,0,255);
    }
  }
}


//find mouse pos
function getCurrentY(){
  let constrainedY = constrain(mouseY,0,height-1);
  return floor(constrainedY/squareSize);
}
function getCurrentX(){
  let constrainedX = constrain(mouseX,0,width-1);
  return floor(constrainedX/squareSize);
}

//finds win con, changes colors
function mousePressed(){
  let x = getCurrentX(); 
  let y = getCurrentY();
  //if on canvas
  if(keyIsPressed && keyCode === SHIFT){
    flip(x,y);
  }
  else{
    flip(x,y);
    if(y>0) flip(x,y-1);
    if(y<NUM_ROWS-1) flip(x,y+1);
    if(x<NUM_COLS-1) flip(x+1,y);
    if(x>0) flip(x-1,y);
  }
  if(winCon(grid) === true){
    console.log("YOU WIN!!!!!!!!");
  }
}
//win condition (learned how to use every)
function winCon(grid){
  if(grid.every(row => row.every(num => num === 0))){
    return true;
  }
  else if(grid.every(row => row.every(num => num === 255))){
    return true;
  }
}

function draw() {
  background(220);
  renderGrid();
  renderOverlay();
}


function renderOverlay(){
//displays the overlay
  for(let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      if(gridOverlay[y][x] === 1){
        fill(0,255,0,50);
        rect(x*squareSize, y*squareSize,squareSize);
        gridOverlay[y][x] = 0;
      }
    }
  }
  //updates the overlay
  let gx = getCurrentX();
  let gy = getCurrentY();
  gridOverlay[gy][gx] = 1;
  if(gy>0) gridOverlay[gy-1][gx] = 1;
  if(gy<NUM_ROWS-1)  gridOverlay[gy+1][gx] = 1;
  if(gx<NUM_COLS-1) gridOverlay[gy][gx+1] = 1;
  if(gx>0) gridOverlay[gy][gx-1] = 1; 
    
}

//changes 0 to 255 vise versa
function flip(x,y){
  //take a tile and invert its value
  if(grid[y][x] === 0) grid[y][x] = 255;
  else grid[y][x] = 0;
}

//renders grid(unsurprisingly)
function renderGrid(){
  //interpret the info in the 2d array
  for(let y = 0; y < NUM_ROWS; y++){
    for(let x = 0; x < NUM_COLS; x++){
      let fillColor = grid[y][x];
      fill(fillColor);
      rect(x*squareSize, y*squareSize,squareSize);
    }
  }
}