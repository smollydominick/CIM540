var x;
var y;
var q;
var z;
var img1;

function setup() {
  createCanvas(windowWidth,windowHeight);
  img1 = loadImage("img/watermelon.jpg");
  x=width/2;
}

function draw() {
  image(img1,0,0);
  
  watermelon(x,y);
  x = x + random(-50,50);
  y = height/2;
  
  stroke(0);
  strokeWeight(3);
  textSize(32);
  text("This is a spazzy watermelon.", width/2, (height/2) - 100);
  
}

//x = 500
//y = 200

function watermelon (x1,y1) {
  //rind
  stroke(0);
  strokeWeight(3);
  fill(8,128,26);
  ellipse(x1,y1,200,150);
  
  //fruitmeat
  stroke(0);
  strokeWeight(2);
  fill(245,125,235);
  ellipse(x1,y1,180,130);

  //seeds
  strokeWeight(0.5);
  fill(245,244,208);
  ellipse(x1 - 70,y1 + 20,10,5);
  ellipse(x1 - 30,y1 + 30,10,5);
  ellipse(x1 - 10,y1 + 10,10,5);
  ellipse(x1 + 10,y1 + 50,10,5);
  ellipse(x1 + 50,y1 + 30,10,5);
  ellipse(x1 - 70,y1 - 20,10,5);
  ellipse(x1 - 30,y1 - 30,10,5);
  ellipse(x1 - 10,y1 - 10,10,5);
  ellipse(x1 + 10,y1 - 50,10,5);
  ellipse(x1 + 50,y1 - 30,10,5);
}