let angle = 0;
let frames = 180;

function setup(){
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
  strokeWeight(0.8);
  
}

function draw(){
  background(161,216,209);
  camera(400, -400, 800);
  
  translate(0,100,0);
  rotateY(angle);
  angle += 360 / frames;
  pointLight(244,165,177, 0, -100,200)
  ambientLight(150)

  for(let r = 0; r <= 1.06; r += 0.06){

  ambientMaterial(231,203,203)
  stroke(231,203,203);
    
    beginShape(LINES); 
    for(let theta = 0*180; theta <= 180*25; theta += 0.2){
      let phi = (180/2)*Math.exp(-theta/(8*180));
      let petalCut = 1-(1/6) * pow((15/4)*pow(1-((5.6*theta%360)/180), 4)-1/4, 2);
      let hangDown = 2*pow(r, 4)*pow(1.3*r-1, 2)*sin(phi);

      if(0 < petalCut * (r * sin(phi)+hangDown*cos(phi))){
        let pX = 250 * petalCut * (r * sin(phi)+hangDown*cos(phi)) * sin(theta);
        let pY = -260 * petalCut * (r* cos(phi)-hangDown*sin(phi));
        let pZ = 260 * petalCut * (r* sin(phi)+hangDown*cos(phi)) * cos(theta);
        vertex(pX, pY, pZ);
      }
    }
    endShape();
}
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 3);
  }
}