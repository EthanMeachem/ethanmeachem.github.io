// Random vs Noise
// Ethan Meachem
// 2/28/2025
//A look at different ways to use unpredictability in our programs

let mySeed;
let noiseTime;
let noiseStart =5;
let noisespeed = 0.1;

function setup() {
  createCanvas(600, 600);
  textAlign(CENTER, CENTER);
  mySeed = random(1000);
}

function draw() {
  noiseTime = noiseStart;
  randomSeed(mySeed);
  background(220);
  randomNumbers();
  noiseNumbers();
}

function noiseNumbers(){
  let x = 100;
  while(x <= 500){
    let randomNum = noise(noiseTime); //0-1
    randomNum = map(randomNum, 0, 1, 1, 100);
    randomNum = round(randomNum);

    fill(140, 220, 140);
    circle(x,400, randomNum);
    fill(0);
    text(randomNum, x, 400);
    x += 50;
    noiseTime += noisespeed;
  }
}



function randomNumbers(){
  //display a line of sevrral numbers generated with the random() function.
  let x = 100
  while(x <= 500){
    let randomNum = round(random(1,100));
    fill(200,80,80); noStroke();
    circle(x, 200, randomNum);
    fill(0);
    text(randomNum, x, 200);
    x+=50;
  }
}