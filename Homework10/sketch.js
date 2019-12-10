
// Variables for movements and text adjustment.
var lEye = 140;
var rEye = 115;
var lLeg = 325;
var rLeg = 160;
var xHead = 150;
var yHead = 120;
var textPt = 32;
var textInc = -1;
var xMove1;
var xMove2;
var yMove1;
var yMove2;
var dMove1;

// Setup function, setting the basis of movements and the canvas.
function setup() {
  createCanvas(300, 500);
  xMove1 = Math.floor(Math.random()*10)+1;
  xMove2 = Math.floor(Math.random()*10)+1;
  yMove1 = Math.floor(Math.random()*10)+1;
  yMove2 = Math.floor(Math.random()*10)+1;
  dMove1 = Math.floor(Math.random()*10)+1;
}

function draw() {
  background(20,200,200);
  fill(250, 220, 180);

  // Text details and size adjustment command.
  stroke('black');
  strokeWeight(3);
  text('Lisa Yakubowski', 150, 475);
  textSize(textPt);
  textAlign(CENTER);
  text('Self Portrait', 150, 50);
  if(textPt == 37 || textPt == 32)
  {
    textInc *= -1;
  }
  textPt += textInc;

  // Legs and Arms, legs moving on x and y axis.
  stroke('black');
  strokeWeight(5);
  rect(75, 190, 150, 15);

  rect(120,lLeg,15,100);
  if(lLeg >=500 || lLeg <=0)
  {
    yMove2 *= -1;
  }
  lLeg += yMove2;

  rect(rLeg,325,15,100);
  if(rLeg >=300 || rLeg <=0)
  {
    xMove2 *= -1;
  }
  rLeg += xMove2;

  fill(200,25,200);

  // Body
  triangle(100, 350, 150, 120, 200, 350);
  fill(250, 220, 180);

  // Head, moving diagonally.
  ellipse(xHead, yHead, 50, 60);
  if((xHead >=300 || xHead <=0)||(yHead >=500 || yHead <=0))
  {
    dMove1 *= -1;
  }
  xHead += dMove1;
  yHead += dMove1;
  stroke('black');
  strokeWeight(5);

  // Buttons
  stroke('purple');
  strokeWeight(10);
  point(150, 220);
  point(150, 270);
  point(150, 320);

  // Eyes, movements on x and y axis.
  point(lEye, 115);
  if(lEye >=300 || lEye <=0)
  {
    xMove1 *= -1;
  }
  lEye += xMove1;

  point(160, rEye);
  if(rEye >=500 || rEye <=0)
  {
    yMove1 *= -1;
  }
  rEye += yMove1;

  // Hair
  stroke('yellow');
  strokeWeight(3);
  line(150,90,100,150);
  line(150,90,100,140);
  line(150,90,100,130);
  line(150,90,100,120);
  line(150,90,100,110);
  line(150,90,200,150);
  line(150,90,200,140);
  line(150,90,200,130);
  line(150,90,200,120);
  line(150,90,200,110);
}
