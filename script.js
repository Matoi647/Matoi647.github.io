function setup(){
  createCanvas(200, 200);
  createP("This is a paragraph generated by p5.js");
}

function mousePressed(){
  createP("This is a random number created by p5.js: " + random(0, 1));
}

function draw(){
  background(0);
  fill(255, 0, 0);
  rect(100, 100, 50, 50);
}
