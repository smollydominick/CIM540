var img1;
var img2;
var img3;
var x;
var y;
var donnax;
var donnay;
var isOverCircle;
 
function setup() 
{
  // set canvas size
  createCanvas(windowWidth, windowHeight);
  
  // load image
  img1 = loadImage("img/bacon.png");
  img2 = loadImage("img/narwhal.png");
  img3 = loadImage("img/juliowallpaper.jpeg");
  
  x = 0;
  y = height*(2/3);
  
  donnax = 0;
  
}
 
function draw() 
{
  
  /*Below portion of code before sky made with help from http://coursescript.com/notes/interactivecomputing/interactivity/index.html*/
  // get distance between mouse and circle
  var distance = dist(mouseX, mouseY, width/2, height/2 + 150); 
  
  // if the distance is less than the circle's radius
  if(distance < 250)
  {
    isOverCircle = true;
  } else {
    isOverCircle = false;
  }
  
  
  //sky
  noStroke();
  fill(113, 208, 240);
  rect(0,0,windowWidth,windowHeight);
  
  //clouds
  
  
  //grass
  fill(70, 153, 18);
  rect(0, height - 100, windowWidth, 100);
  
  //clinton foundation
  stroke(0);
  strokeWeight(5);
  fill(255,255,255);
  rect(windowWidth - 200, windowHeight - 150, 200, 140);
  textSize(15);
  textAlign(LEFT, LEFT);
  fill(0);
  strokeWeight(1);
  text("CLINTON FOUNDATION", windowWidth - 180, windowHeight - 120);
  
  //doorway
  noStroke();
  fill(117,102,102);
  rect(windowWidth - 130,windowHeight - 90, 30, 78);
  
  //donna
  fill(0);
  stroke(5);
  strokeWeight(1);
  ellipse(donnax, donnay,20,20);
  
  donnax = donnax + 5;
  donnay = height - 50;
  
  if(donnax > windowWidth && y > 0)
  {
    noStroke();
    fill(255,255,255);
    rect(0,0,windowWidth,windowHeight);
    textSize(32);
    textAlign(CENTER,CENTER);
    fill(0);
    text("Unlike the ibis, you did not soar.",width/2,height/2);
    
    stroke(0);
    strokeWeight(3);
    fill(255,0,0);
    if(isOverCircle == true)
    {
      fill(0,255,0);
      cursor(HAND);
    }
    else {
      fill(255,0,0);
      cursor(ARROW);
    }
    ellipse(width/2, height/2 + 150, 250, 250);
    textAlign(CENTER, CENTER);
    textSize(40);
    strokeWeight(1);
    fill(0);
    text("FLY AGAIN", width/2, height/2 + 150);
    
    //clinton foundation
  stroke(0);
  strokeWeight(5);
  fill(255,255,255);
  rect(windowWidth - 200, windowHeight - 150, 200, 140);
  textSize(15);
  textAlign(LEFT);
  fill(0);
  strokeWeight(1);
  text("CLINTON FOUNDATION", windowWidth - 180, windowHeight - 120);
  }
  
  if(y < 0 && donnax < windowWidth)
  {
    textSize(32);
    textAlign(CENTER,CENTER);
    fill(0);
    text("Donna is so proud.",width/2,height/2);
  }
  
  //disappearance thingy
  fill(255,255,255);
  noStroke();
  rect(windowWidth - 100, windowHeight - 100, 98, 75);
  
  //actual julio
  image(img1, x, y);
  
  if(donnax > windowWidth - 130)
  {//clinton foundation
  stroke(0);
  strokeWeight(5);
  fill(255,0,0);
  rect(windowWidth - 200, windowHeight - 150, 200, 140);
  textSize(15);
  fill(0);
  strokeWeight(1);
  text("CLINTON FOUNDATION", windowWidth - 180, windowHeight - 120);
  
  //doorway
  noStroke();
  fill(117,102,102);
  rect(windowWidth - 130,windowHeight - 90, 30, 78);
  
  //disappearance thingy
  fill(255,0,0);
  noStroke();
  rect(windowWidth - 100, windowHeight - 100, 98, 75);
  
}
}


function keyPressed()
{
  x = x + random(0,50);
  y = y + random(-100,50);
  image(img1, x, y);
  
  if(key == 'U' || key == 'u')
  {
  x = x + random(20,80);
  y = y + random(-300,0);
  }
}

function keyReleased()
{
  x = x + random(0,50);
  y = y + random(-100,50);
  image(img2, x, y);
}

function mousePressed ()
{
  if(isOverCircle == true)
  {
    window.location = "http://miami.edu";
  }
}

