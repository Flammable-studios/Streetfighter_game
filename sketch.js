// Project Title Street fighter
// Your Name(s) Jayson, Nathan
// Date 9/19/25

//Variables
let p1X = 50;
let p1Y = 290;
let p2X = 550;
let p2Y = 290;
let p1Health = 100;
let p2Health = 100;
let backDrop;


function preload() {
  backDrop = loadImage('Background_level1.jpg');
  
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
  image(backDrop, 0, 0, 600, 400);

  rect(p1X, p1Y, 20, 40);
  fill('red');
  rect(p2X, p2Y, 20, 40);
  //Health Bars
  fill('black');
  rect(30, 50, 200, 30);
  rect(370, 50, 200, 30);
  fill('red');
  stroke('black');
  rect(230, 50, p1Health * -2, 30);
  rect(370, 50, p2Health * 2, 30);
  textSize(20);
  fill('black');
  text("P1", 30, 45);
  text("P2", 540, 45);
  textSize(50);
  text("HP", 270, 70);

  //Player movement
  if (keyIsDown(68)) {
    p1X += 5;
  }
  if (keyIsDown(65)) {
    p1X -= 5;
  }
  if (keyIsDown(37)) {
    p2X -= 5;
  }
  if (keyIsDown(39)) {
    p2X += 5;
  }

  if (p1X > p2X - 10) {
    p1X -= 10;
    p2X += 10;
  }

  //Boundaries
  if (p1X < 0) { p1X = 0; }
  if (p1X > 580) { p1X = 580; }
  if (p2X < 0) { p2X = 0; }
  if (p2X > 580) { p2X = 580; }

  function p1Punch() {

  }
}