var x = 0;
var y = 0;
var targetX = 0;
var targetY = 0;

function setup() {
createCanvas(1400, 950);
}

function draw() {
	background(255);
	ellipse(x, y, 50, 50);
//line(x, 0, x, height);
	
	var easing = 0.1;
	
	var diffX = targetX - x;
	x += diffX * easing;
	
	var diffY = targetY - y;
	y += diffY * easing;
}

function mousePressed() {
	targetX = mouseX;
	targetY = mouseY;
}