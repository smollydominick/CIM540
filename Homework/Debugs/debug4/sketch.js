var x;
var y;
var xSpeed;
var ySpeed;
var xDirection;
var yDirection;
var r;
var g;
var b;
var t;
var rad;
var radDirection;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(255);
  g = random(255);
  b = random(255);
  x = random(width);
  y = random(height);
  xSpeed = random(1,5);
  ySpeed = random(1,5);
  rad = random(20,50);
  xDirection = 1;
  yDirection = 1;
  radDirection = 1;
  t = 0;
}

function draw() {
  stroke(r,g,b,50);
  fill(r,g,b,20);
  flower(x, y, rad, t);
  t++;
  x+=(xSpeed*xDirection);
  y+=(ySpeed*yDirection);
  
  rad+=radDirection;
  if (rad > 100) {
    radDirection = -1;
  }
  if (rad < 10) {
    radDirection = 1;
  }
  
  if (xOutOfBounds(x)) {
    xDirection *= -1;
  }

  if (yOutOfBounds(y)) {
    yDirection *= -1;
  }  
}


function flower(xPos, yPos, radius, twist) {
    for (var i = 0; i < 360; i = i + 72) {
      var adjustedX = xPos + cos( radians(twist + i) ) * (radius/2);
      var adjustedY = yPos + sin( radians(twist + i) ) * (radius/2);
      ellipse(adjustedX, adjustedY, radius/1.5, radius/1.5);
    }

 fill(255,255,255);
 ellipse(xPos,yPos,radius/1.2,radius/1.2);
}

function xOutOfBounds(x) {
  if (x > width || x < 0) {
    return true;
  }
  return false;
}

function yOutOfBounds(y) {
  if (y > height || y < 0) {
    return true;
  }

}