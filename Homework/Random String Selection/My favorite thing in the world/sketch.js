var arrayText;
var arrayColor = [];
var arrayShape = [];
var selection;
var img1;

function setup() {
  createCanvas(displayWidth, displayHeight);
  
  img1 = loadImage("image/stripedsweater.jpg");
  
  selection = 0;
  
  arrayText = ["\nRichard Simmons", "\nTaco Bell", "\nGary Busey", "\nSpongebob's striped sweater", "\nMy Dinner with Andre"];
  arrayColor[0] = color(240,105,231);
  arrayColor[1] = color(160,23,194);
  arrayColor[2] = color(22,240,22);
  arrayColor[3] = color(22,105,240);
  arrayColor[4] = color(106,247,245);
}

function draw() {
  background(arrayColor[selection]);
  textSize(50);
  stroke(0);
  fill(0);
  textAlign(CENTER);
  text("My favorite thing in the world is " + arrayText[selection] + ".", width/2, height/2);
  textSize(32);
  text("Click to find out more,\n you scalliwag!", width/2, height/2 - 200);
}

function mousePressed() {
  selection++;
  if ((selection >= arrayText.length) || (selection >= arrayColor.length)) {
    selection = 0;
  }
}




