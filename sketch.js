// Project Title Street fighter
// Your Name(s) Jayson, Nathan
// Date 9/19/25

//Variables
//let p1X;
//let p1Y;
//let p2X;
//let p2Y;
let p1Health = 100;
let p2Health = 100;
let backDrop;

function preload() {
  backDrop = loadImage('img/Background_level1.jpg');
  createImage('img/Background_level1.jpg');
  //soundFormats('mp3');
}

//This function get run once at the start of the program
function setup() {
  createCanvas(600, 400);
  background(240);
  rectMode(CORNER);
  ellipseMode(CENTER);
  frameRate(60);
}

function draw() {
  background(220);
  //backDrop(100, 200);
  
  //Health Bars
  fill('black');
  rect(30, 50, 200, 30);
  rect(370, 50, 200, 30);
  fill('red');
  stroke('black');
  //health bars
  rect(230, 50, p1Health * -2, 30);
  rect(370, 50, p2Health * 2, 30);
  textSize(20);
  fill('black');
  text("P1",30, 45);
  text("P2",540, 45);
  textSize(50);
  text("HP", 270, 70)

  //player
}
