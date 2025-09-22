// Project Title Street fighter
// Your Name(s) Jayson, Nathan
// Date 9/19/25

//Variables
let pX;
let pY;
let eX;
let eY;
let Score = 0;
let health = 100;
//let backDrop;

function preload() {
  //backDrop = loadImage('img/Background_level1.jpg');
  //createImage('img/Background_level1.jpg');
  //soundFormats('mp3');
}

//This function get run once at the start of the program
function setup() {
  createCanvas(1800, 900);
  background(240);
  // ellipseMode(CORNER);
  ellipseMode(CENTER);
  rectMode(CENTER);

  //Set the number of frames per second
  frameRate(60);
}

function draw() {
  background(220);
  //backDrop(100,200);
}
