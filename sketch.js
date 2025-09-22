// Project Title Street fighter
// Your Name(s) Jayson, Nathan
// Date 9/19/25

//Variables
let p1X = 50;
let p1Y = 200;
let p2X = 550;
let p2Y = 200;
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
  rect (p1X, 200, 20, 40);
  //rect (p2X, 200, 20, 40);
  //Health Bars
  fill('black');
  rect (30, 50, 200, 30);
  rect (370, 50, 200, 30);
  fill('red');
  stroke('black');
  rect (230, 50, p1Health * -2, 30);
  rect (370, 50, p2Health * 2, 30);
  textSize(20);
  fill('black');
  text("P1",30, 45);
  text("P2",540, 45);
  textSize(50);
  text("HP", 270, 70);

  //Player movement
  if(keyIsDown(68)){
    p1X += 5;
  }
  if(keyIsDown(65)){
    p1X -= 5;
  }
   if(KeyIsDown(37)) {
   p2X += 5;
  }
  if(KeyIsDown(39)) {
   p2X -= 5;
  }


}
