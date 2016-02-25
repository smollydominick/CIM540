var xPos = [];
var yPos = [];
var bgColor;
var circleSize = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);  
  newBackgroundColor();
  
}

function draw() {
  background(bgColor);
  for (var i = 0; i < xPos.length; i++) {
    ellipse(xPos[i], yPos[i], circleSize, circleSize);
  }
}

function newBackgroundColor() {
  bgColor = color(random(255), random(255), random(255));
}

function mouseDragged() {
  xPos.push(mouseX);
  yPos.push(mouseY);
}

function keyPressed() {
  if (key == ' ') {
   newBackgroundColor();
  }
  
  if (key == 'C') {
    xPos = [];
    yPos = [];
  }
  
  if (keyCode === UP_ARROW) {
    circleSize++;
  }
  if (keyCode === DOWN_ARROW) {
    circleSize--;
  }
  
  if (keyCode == RIGHT_ARROW) {
    for (i = 0; i < xPos.length; i++) {
      xPos[i] = xPos[i] + 5;
    }
  }
  
  if (keyCode === LEFT_ARROW) {
    for (var i = 0; i < xPos.length; i++) 
      xPos[i] = xPos[i] - 5;
    }
    
  }