let angle = 0;
let frames = 180;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(0,0,35,25);

  let stars = { 
  locationX : random(width),
  locationY : random(height),
  size : random(1,10),
}
 fill("white")
  ellipse(stars.locationX, stars.locationY, stars.size/2, stars.size/2);
 
  translate(300,300)
  angle +=  360 / frames;
  rotate(angle)

  translate(0,150)
  rotate(2*angle)
  yin(0,0,150)
 
  resetMatrix()
  translate(300,300)
  rotate(angle)
  translate(0,-150)
  rotate(-2*angle)
  yin(0,0,150)
}

function yin(x,y,diameter){
translate(x,y);
strokeWeight(3);
drawingContext.shadowColor = 'white';

stroke(0);
fill(255);
ellipse(0, 0, diameter + 3);
fill(0);
arc(0, 0, diameter, diameter, 270, 90);
noStroke();
ellipse(0, 0 + diameter / 4, diameter / 2);
fill(255);
ellipse(0, 0 + diameter / 4, diameter / 8);
ellipse(0, 0 - diameter / 4, diameter / 2);
fill(0);
ellipse(0, 0 - diameter / 4, diameter / 8);
stroke(255);
strokeWeight(5);

stroke('white')
noFill()
ellipse(0,0,diameter)
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 3);
  }
}