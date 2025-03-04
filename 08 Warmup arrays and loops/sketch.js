// Warmup exercises:
//1. Summing an array
//2. Drawing with loops practice
// Ethan Meachem
// 3/3/2025

let a = [22, 11, 5, 5, 90, 80, 70, 60];
//        0   1  2  3  4    5   6   7
// a.length is 8
function setup() {
  createCanvas(400, 400);
  background(220);
  //task 1: add up all the values in our array and display the total in the console]
  let total = 0;
  for(let i = 0; i < a.length; i++){
    total += a[i];
  }
  print(total);
}

function draw() {
  for(let i = 0; i < 11;  i++){
    circle(i*40, i*40, 20);
    circle(i*40, 400-i*40, 20);
  }

}
