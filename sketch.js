// Project Title Street fighter
// Your Name(s) Jayson, Nathan
// Date 9/19/25

//Variables
let p1X = 50;
let p1Y = 290;
let p2X = 550;
let p2Y = 290;
let p1Health = 100;
let p2Health = 0;
let backDrop;
let EasterEgg;
let p1Idle = true;
let p2Idle = true;
let p1Punch = false;
let p2Punch = false;
let p1Kick = false;
let p2Kick = false;
let p1Block = false;
let p2Block = false;
let p1AttackCooldown = false;
let p2AttackCooldown = false;
let textSizeVar = 32;



function preload() {
  backDrop = loadImage('Background_level1.jpg');
  soundFormats('mp4');
  EasterEgg = loadVideo('OIIA.mp4');
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
  //players
  drawPlayers(20, 40);
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

  if (p1X > p2X - 20) {
    p1X -= 10;
    p2X += 10;
  }

  //Boundaries
  if (p1X < 0) { p1X = 0; }
  if (p1X > 580) { p1X = 580; }
  if (p2X < 0) { p2X = 0; }
  if (p2X > 580) { p2X = 580; }
  //player actions
  fill('blue');

  if (p1Punch === true) {
    rect(p1X + 20, p1Y + 10, 15, 2.5);
  }

  if (p1Kick === true) {
    rect(p1X + 20, p1Y + 25, 15, 2.5);
  }

  if (p1Block === true) {
    rect(p1X + 20, p1Y + 15, 15, 2.5);
    rect(p1X + 32.5, p1Y + 5, 2.5, 10);
  }

  if (p1Idle === true) {
    rect(p1X + 20, p1Y + 15, 10, 2.5);
    rect(p1X + 27.5, p1Y + 10, 2.5, 5);
  }

  fill('lime');
  if (p2Punch === true) {
    rect(p2X - 15, p2Y + 10, 15, 2.5);
  }

  if (p2Kick === true) {
    rect(p2X - 15, p2Y + 25, 15, 2.5);
  }

  if (p2Block === true) {
    rect(p2X - 15, p2Y + 15, 15, 2.5);
    rect(p2X - 15, p2Y + 5, 2.5, 10);
  }

  if (p2Idle === true) {
    rect(p2X - 10, p2Y + 15, 10, 2.5);
    rect(p2X - 10, p2Y + 10, 2.5, 5);
  }

  fill('black');
  //p1 punch
  if (keyIsDown(69) && p1AttackCooldown == false) {
    p1AttackCooldown = true;
    p1Idle = false;
    p1Punch = true;
    setTimeout(() => {
      p1AttackCooldown = false;
    }, 500);
  }

  //p1 kick
  if (keyIsDown(82) && p1AttackCooldown == false) {
    p1AttackCooldown = true;
    setTimeout(() => {
      p1AttackCooldown = false;
    }, 800);
    p1Idle = false;
    p1Kick = true;
  }

  //p1 block
  if (keyIsDown(81)) {
    p1Idle = false;
    p1Block = true;
  }

  //p2 punch
  if (keyIsDown(45) && p2AttackCooldown == false) {
    p2AttackCooldown = true;
    p2Idle = false;
    p2Punch = true;
    setTimeout(() => {
      p2AttackCooldown = false;
    }, 500);

  }

  //p2 kick
  if (keyIsDown(38) && p2AttackCooldown == false) {
    p2AttackCooldown = true;
    setTimeout(() => {
      p2AttackCooldown = false;
    }, 800);
    p2Idle = false;
    p2Kick = true;
  }

  //p2 block
  if (keyIsDown(40) && p2AttackCooldown == false) {
    p2AttackCooldown = true;
    setTimeout(() => {
      p2AttackCooldown = false;
    }, 800);
    p2Idle = false;
    p2Block = true;
  }

  //Reseting stuff
  if (p1Idle === false) {
    setTimeout(() => {
      p1Idle = true;
    }, 500);
  }

  if (p1Punch === true) {
    setTimeout(() => {
      p1Punch = false;
    }, 500);
    if (p2X < p1X + 75 && p2Block === true) {
      p2Health -= 2.5;
      p1Punch = false;
      p1Idle = true;
    } else if (p2X < p1X + 75 && p2Block === false) {
      p2Health -= 5;
      p1Punch = false;
      p1Idle = true;
    }
  }

  if (p1Kick === true) {
    setTimeout(() => {
      p1Kick = false;
    }, 500);
    if (p2X < p1X + 75 && p2Block === true) {
      p2Health -= 5;
      p1Kick = false;
      p1Idle = true;
    } else if (p2X < p1X + 75 && p2Block === false) {
      p2Health -= 7.5;
      p1Kick = false;
      p1Idle = true;
    }
  }

  if (p1Block === true) {
    setTimeout(() => {
      p1Block = false;
    }, 500);
  }

  if (p2Idle === false) {
    setTimeout(() => {
      p2Idle = true;
    }, 500);
  }

  if (p2Punch === true) {
    setTimeout(() => {
      p2Punch = false;
    }, 500);
    if (p2X < p1X + 75 && p1Block === true) {
      p1Health -= 2.5;
      p2Punch = false;
      p2Idle = true;
    } else if (p2X < p1X + 75 && p1Block === false) {
      p1Health -= 5;
      p2Punch = false;
      p2Idle = true;
    }
  }

  if (p2Kick === true) {
    setTimeout(() => {
      p2Kick = false;
    }, 500);
    if (p1X > p2X - 75 && p1Block === true) {
      p1Health -= 5;
      p2Kick = false;
      p2Idle = true;
    } else if (p1X > p2X - 75 && p1Block === false) {
      p1Health -= 7.5;
      p2Kick = false;
      p2Idle = true;
    }
  }

  if (p2Block === true) {
    setTimeout(() => {
      p2Block = false;
    }, 500);
  }
  if (p1Health <= 0) {
    p1Health = 0;
    background('lime');
    textSize(100);
    fill('black');
    text("P2 WINS", 175, 200);
    noLoop();
  }

  // while (p1Health <= 0 || p2Health <= 0) {
  //   textSizeVar += 5;
  // }

  if (p2Health <= 0) {
    p2Health = 0;
    background('lime');
    textSize(textSizeVar);
    fill('black');
    text("P1 WINS", 175, 200);
    noLoop();
  }

  if (p1Health <= 0 && p2Health <= 0) {
    background('white');
    fill('black');
    textSize(50);
    text("OIIA OIIA OIIA OIIA OIIA", 20, 350);
    EasterEgg.play();
    noLoop();
  }
  //Function to draw players
  function drawPlayers(w, h) {
    // Draw Player 1
    fill('blue');
    rect(p1X, p1Y, w, h);

    // Draw Player 2
    fill('lime');
    rect(p2X, p2Y, w, h);
  }
}