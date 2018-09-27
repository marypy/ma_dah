

function setup() {
  var canvas = createCanvas(400, 400);
  background(255, 0, 10);
  canvas.parent('sketch-holder');
  frameRate(20);
}

function draw() {
  background(220);
//    noLoop();
    strokeWeight(2);
    stroke(10);
    
    
  strokeWeight(0.2);
  stroke(120);

   for (var i= random(1, 10); i<400; i += random (10, 60)){
   var value=random(100, 300);
   line(i, 20, i +random(-20, 20), value);
  }
}


