let c1; let c2; let c3;
let r = 280; let angle = 0;
let amt = 0; let startingAngle = -90;

function setup() {
  createCanvas(600, 600);
  rectMode(CENTER);
  c1 = color('#fd1111');
  c2 = color('#330705');
  c3 = color('#140505');
  
  angleMode(DEGREES);
}

function draw() {
  background(220);

  setGradientBlock(0, width/4, 0, height, c1, c2);
  setGradientBlock(width/4   , 2*width/4, 0, height, c2, c3);
  setGradientBlock(2*width/4, 3*width/4, 0, height, c3, c2);
  setGradientBlock(3*width/4, width, 0, height, c2, c1);
  
  translate(width/2, height/2);
  setGradientEllipse(0 + angle  , 90 + angle, c1, c2);
  setGradientEllipse(90 + angle , 180 + angle, c2, c3);
  setGradientEllipse(180 + angle, 270 + angle, c3, c2);
  setGradientEllipse(270 + angle, 360 + angle, c2, c1);
  
  angle = startingAngle + easeInOutQuad(amt) * 1;
  if (amt > 1) {
    amt = 0;
    startingAngle += 30;
  } else {
    amt += 1;
  }
}

function setGradientBlock(min, max, y, h, c1, c2) {
  for (let i=min; i<=max; i+=0.01) {
    let amt = map(i, min, max, 0, 1);
    let c3 = lerpColor(c1, c2, amt);
    
    stroke(c3);
    line(i, y, i, y + h);
  }
}

function setGradientEllipse(min, max, c1, c2) {
  for (let i=min; i<max; i+= 0.5) {
    let amt = map(i, min, max, 0, 1);
    let c3 = lerpColor(c1, c2, amt);
    
    stroke(c3);
    
    let x = r*cos(i);
    let y = r*sin(i);
    line(0, 0, x, y);
  }
}

function keyPressed() {
  if (key === 's') {
    saveGif('beyond the tears', 1);
  }
}