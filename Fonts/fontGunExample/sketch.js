var gBlack;
var wordBank;
function preload() {
  gBlack = loadFont("assets/Avenir-Black.otf");  
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  textFont(gBlack);
  textSize(30);
  wordBank = "CLAY";
  background(255,255,255);
  
}

function draw() {
}

function mouseDragged() {
  var letter = randomLetterFromText(wordBank);
  text(letter, mouseX, mouseY);
}
function randomLetterFromText(txt) {

	var letterNumber = random(txt.length);
	var letter = txt.charAt(letterNumber);
	return letter;

} 