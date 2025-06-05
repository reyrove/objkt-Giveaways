let todn = 3
let myNumFrames = 60;
let SEED = 0
let sw = 8
let noises;
let ddxs = []

function setup() {
  pixelDensity(1)
  createCanvas(600, 600)
  SEED = random(10,1000);
  noises = new OpenSimplexNoise(Date.now());
  for(i=0; i<todn; i++) {
    ddxs[i] = random(0,3)
  }

  background(0)
  frameRate(30)
}

function draw() {
  m = 3000;
  rad = 1;
  nperiod = 3.0;

  background(1,50,32);
  stroke(99,111,101);
  t = 1.0*(frameCount-1) / myNumFrames
  for( j=0; j< todn; j++ ) { 
    let ddx = ddxs[j]
    
  for(i=0; i<m; i++) {
    p = 1.0*i/m;
    dx = 400*noises.noise3D(SEED +8000*ddx+ rad*Math.cos(TWO_PI*(nperiod*p-t)),rad*Math.sin(TWO_PI*(nperiod*p-t)),2.0*p)
    dy =25*noises.noise3D(300*SEED + rad*Math.cos(TWO_PI*(nperiod*p-t)),rad*Math.sin(TWO_PI*(nperiod*p-t)),2*p);    

    strokeWeight(sw*Math.sin(PI*p))
    stroke(99,111,101, 50*Math.sin(PI*p));
 
    point(p*width + dx,height/2 + 2*5*dy + ddx*13);
  }
  }
  
}

function keyPressed() {
  if (key === 's') {
    saveGif('Elements',2);
  }
}