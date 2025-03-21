// Objects Demo (Books)
// Ethan Meachem
// 3/12/2025

let myBook;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // myBook = new Book("CS30 Text", "Mr. Scott", 1234567891011, "leatherbound", 500,width*0.3);
  //make 20 books in a row
  let x = 50;
  let covers = ["softcover", "hardcover", "letherbound"];
  for(let i = 0; i<20; i++){
    let choice = int(random(3));
    bookshelf.push(new Book("Fortnite Bible", "Ninja", 666666666666,covers[choice], 200,x));
    x += 20;
  }
}

function draw() {
  background(220);
  myBook.display();
  
  bookshelf.display();
}

//nice to organize class at the bottom
class Book{
  //1.constructor
  constructor(title, author, isbn, cover, pages, x){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
  }

  //2. class methods
  display(){
    //render our book obect on the canvas
    rectMode(CENTER); textAlign(CENTER,CENTER);
    textSize(20);

    switch(this.cover){
    case "softcover":
      fill(250,200,150);  break;
    case "hardcover":
      fill(120,255,255); break;
    case "leatherbound":
      fill(150,100,15); break;
    }
    rect(this.x, height/2,this.pages/10, 150);
    fill(255);
    text(this.title[0],this.x, height/2 - 50);
  }
  printOut(){
  //print out the data in a nice format
    print(this.title +", by " + this.author);
    print("Length: " + this.pages);
    print("ISBN: " + this.isbn);
  }
}