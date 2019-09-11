var speed = 0.005;


function setup() {
	createCanvas(windowWidth, windowHeight);
//	noLoop();
	background(255); }

function draw() {
background(255);

for (var i=0; i<4; i++) {
	var value = random(10, 250);
	target(100 + (i*300), height/2, value, 40);
	}
}

function target(x, y, radius, step) {
fill(255);
ellipse(x, y, radius, radius);

fill('red');
ellipse(x, y, radius-step, radius+step);
	
	fill('green');
ellipse(x, y, radius-step*2, radius-step*2);
	
	fill('blue');
ellipse(x, y, radius-step*3, radius-step*3);
	
	fill(50);
ellipse(x, y, radius-step*4, radius-step*4);
	
	fill(0);
ellipse(x, y, radius-step*5, radius-step*5);
	
}