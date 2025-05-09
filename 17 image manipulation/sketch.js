// image manipulation
// Ethan Meachem
// 4/9/2025

let pilot;

function preload(){
pilot = loadImage("assets/aviator.png");
}


function setup() {
  createCanvas(pilot.width, pilot.height);
}

function setPixelColor(pos,r,g,b){
  pixels[pos] = r;
  pixels[pos+1] = g;
  pixels[pos+2]= b;
}

function draw() {
  image(pilot,0,0);
  loadPixels();
  background(0);
  drawCharacter();
  // updatePixels();
 
}
  
function boostImage(){
  let boost = mouseX;
  for(let i=0;i < pixels.length; i+=4){
    let r = pixels[i] + boost;
    let g = pixels[i+1] + boost; 
    let b = pixels[i+2] + boost;
    setPixelColor(i, r, g, b);
  }
}


function greyscale(){
  for(let i=0;i < pixels.length; i+=4){
let r = pixels[i];
let g = pixels[i+1];
let b = pixels[i+2];
let c = (r+g+b)/3;
setPixelColor(i,c,c,c);
  }
}

function drawCharacter(){
  //render image using characters
  fill(255);
  for(let x = 0; x<width; x+= 10){
    for(let y = 0; y < height; y+=10){
      let loc = (y*pilot.width+x)*4
      let r = pixels[loc];
      let g = pixels[loc+1];
      let b = pixels[loc+2];
      let c = (r+g+b)/3;
      if(c > 200) text("@",x,y);
      else if(c > 150) text("&",x,y);
      else if(c > 100) text("c",x,y);
      else if(c > 50) text("*",x,y);
      else if(c > 20) text(".",x,y);
      else if(c > 15) text(" ", x, y);
      
    }
  }
}