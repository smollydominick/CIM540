var arrayX = [];
var arrayY = [];
var startingRadius;


function setup() {
  createCanvas (windowWidth, windowHeight);
  for (i = 0; i < windowWidth; i++) {
    arrayX.push(random(width));
    arrayY.push(random(height));
  }
  
  startingRadius = 10;
}

function draw() {
  background(96,105,216);
  stroke(0);
  fill(0);
  textSize(32);
  textAlign(CENTER);
  text("To move the weird pretend green stars (a.k.a. circles),\nmove your mouse or use the arrow keys.", width/2, height/2);
  stroke(0);
  fill(23,100,56);
  for (var i = 0; i < 500; i++) {
    ellipse(arrayX[i], arrayY[i], startingRadius, startingRadius);
      if (mouseX < width/2) {
        arrayX[i] = arrayX[i] - (mouseX*0.01);
      }
      if (mouseX > width/2) {
        arrayX[i] = arrayX[i] + (mouseX*0.01);
      }
      if (mouseY < height/2) {
        arrayY[i] = arrayY[i] - (mouseY*0.01);
      }
      if (mouseY > height/2) {
        arrayY[i] = arrayY[i] + (mouseY*0.01);
      }
  }
}

function keyPressed () {
  for (var i = 0; i < 500; i++) {
    if (keyCode === UP_ARROW) {
    arrayY[i] = arrayY[i] - 20;
    }
    if (keyCode === DOWN_ARROW) {
    arrayY[i] = arrayY[i] + 20;
    }
    if (keyCode === LEFT_ARROW) {
    arrayX[i] = arrayX[i] - 20;
    }
    if (keyCode === RIGHT_ARROW) {
    arrayX[i] = arrayX[i] + 20;
    }
    if (key = 'M') {
      arrayX.push(random(width) + random(50) - random(51));
      arrayY.push(random(height) + random (50) - random(51));
    }
  }
}