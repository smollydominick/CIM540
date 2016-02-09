var x;
var y;
var padding;
var circleSize;
var xDirection;
var yDirection;
var speed;
var r;
var g;
var b;
var laps;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleSize = 20;
  padding = circleSize/2;
  x = padding;
  y = padding;
  xDirection = 1;
  yDirection = 0;
  speed = 3;
  r = random(255);
  g = random(255);
  b = random(255);
  laps = 0;
}

function draw() {
    speed = map(mouseX, 0, width, 1, 10);
    
    if(x >= (width - padding) && y <= padding) 
    xDirection = 0
    yDirection = 1;
    r = random(255);
    }

      else if((x >= (width - padding)) && (y >= (height - padding))) {
      xDirection = -1;
      yDirection = 0;
      g = random(255);
      }
  
        else if((x <= padding) && (y >= (height - padding))) {
        xDirection = 0;
        yDirection = -1;
        b = random(255);
        }
  
          else((x <= padding) && (y <= padding)) {
          xDirection = 1;
          yDirection = 0;
          r = random(255);
          g = random(255);
          b = random(255);
          laps++
          }
  
  var lapInverse = map(laps, 0, 100, width/2, 0);
  fill(255,255,255);
  stroke(0);
  ellipse(width/2, height/2, lapInverse, lapInverse);
  noStroke();
  fill(r,g,b);
  ellipse(x, y, circleSize, circleSize);
  x = x + (xDirection * speed);
  y = y + (yDirection * speed);
  
  }