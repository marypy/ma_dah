var angle = 5;
var offset = 100;
var scalar = 300;
var speed = 0.03;

function setup() {
createCanvas(innerWidth, innerHeight);
//fill(209, 1, 1);
    noStroke;
}

function draw() {
background(1, 240, 100, 1);
	
	var y1 = (offset+100) + sin(5+angle) *scalar;
	var y2 = offset + sin(angle - 3) * scalar;
	var y3 = (offset + 500) + sin(angle +100) * scalar;
	var y4 = (offset + 200) + sin(angle +10) * scalar;
    var x1 = (offset + 200) + sin(angle +5) * scalar;
    var x2 = (offset + 600) +sin(angle + 30 ) * scalar;
    var y5 = (500) + sin(angle -15) * scalar;
	ellipse(50, y1, 50, 50);
	ellipse(200, y2, 50, 50);
	ellipse(350, y3, 50, 50);
    ellipse(550, y4, 50, 50);
    ellipse(x1, 300, 50, 50);
    ellipse(x2, 500, 50, 50);
    ellipse (700, y5, 50, 50);
	noFill();
	
	angle += speed;
	
}