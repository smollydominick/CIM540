var x = 100;
var m = 0;
var a;
var b;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  console.log("("+mouseX + "," + mouseY + ")");
  
  //green primer for grass
  noStroke();
  fill(26,255,0,20);
  rect(0,0,windowWidth,windowHeight);
  //sky
  fill(48,242,233);
  rect(0,0,windowWidth,455);
  
  //sun
  r = frameCount%255
  fill(r,r,0);
  ellipse(0,0,220,220);
  stroke(r,r,0);
  line(117,20,150,10);
  line(117,50,152,65);
  line(105,80,135,100);
  line(85,100,110,125);
  line(60,115,65,145);
  line(25,123,25,158);
  
  //sign
  stroke(0,0,0);
  strokeWeight(2);
  fill(255,255,255);
  rect(870,300,10,155);
  rect(800,200,150,100);
  line(830,220,830,270);
  line(860,220,860,270);
  line(830,245,860,245);
  ellipse(880,257,25,25);
  line(894,246,894,270);
  line(902,270,909,246);
  line(909,246,916,270);
  line(916,270,923,246);
  line(923,246,930,270);
  
  //dude
  fill(242,179,39);
  ellipse(x,100,100,100);
  strokeWeight(10);
  line(x,150,x,400);
  line(x,400,x + 50,450);
  line(x,400,x - 50,450);
  line(x,250,x + 70,150);
  line(x,250,x - 70,150);
  x = x + 7
  
  //begin pigmouse
  strokeWeight(5);
  fill(245,115,206);
  //back ear
  ellipse(m + 40,270,20,40);
  //body
  ellipse(m,300,150,60);
  //front ear
  ellipse(m + 30,290,20,40);
  fill(0,0,0);
  //eye
  ellipse(m + 50,295,5,5);
  //leg4
  line(m + 50,323,m + 60,340);
  //leg3
  line(m + 35,326,m + 30,345);
  //leg2
  line(m - 45,326,m - 35,343);
  //leg1
  line(m - 50,323,m - 60,340);
  //tail
  line(m - 75,300,m - 85,290);
  //floaty indicator lines
  stroke(random(0,255),random(0,255),random(0,255));
  strokeWeight(10);
  line(m - 40,370,m - 50,440);
  stroke(random(0,255),0,random(0,255));
  line(m - 20,370,m - 30,440);
  stroke(0,random(0,255),random(0,255));
  line(m,370,m,440);
  stroke(random(0,255),random(0,255),0);
  line(m + 20,370,m + 30,440);
  stroke(random(0,255),0,0);
  line(m + 40,370,m + 50,440);
  m = m + 6

  //happy bubble floor
  var b = random(455,windowHeight);
  var a = random(width);
  fill(0,random(0,255),0,90);
  noStroke();
  ellipse(a, b, 90, 90);
  
}