// Map Data Structures
// Ethan Meachem
// 5/26/2025

let textfile, img, rows, cols, grid, colorMap;

function preload(){
  textFile = loadStrings("assets/info.txt");
  img = loadStrings("assets/colorImage.txt")
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  //processText();

  //determine # of rows and columns
  rows = img.length; cols = img[0].length;

  //create and populate the 2D arrary
  grid = [];
  for(let i = 0; i < rows; i++){
    grid.push([...img[i]])
  }
  //create a map of colors
  colorMap = new Map([
    ["b", "black"],
    ["w", "white"],
    ["r", "sienna"],
    ["l", "peru"],
    ["p", color(150,150,255)]
  
  renderGrid();
}

function renderGrid(){
  //calculate rectangle sizes
  let cellWidth = width/cols
  let cellHeight = height/rows

  for (let x = 0; x < cols; x++){
    for(let y = 0; y < rows; y++){
      let currentKey = grid[y][x]
      fill(colorMap.get(currentKey));
      rect(x*cellWidth, y*cellHeight, cellWidth,cellHeight)
    }
  }
}

function draw() {

}

function processText(){
  print("SPLIT INTO WORDS");
  let splitWords = textFile[0].split(" ");
  print(splitWords)

  print("SPLIT INTO CHARACTERS")
  let splitChars = textFile[1].split("");
  print(splitChars);

  print("SPREAD INTO CHARACTERS")
  let spreadChars = [...textFile[2]];
  print(spreadChars)
}

