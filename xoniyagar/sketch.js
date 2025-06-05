let t = 0; 
function setup() {
  createCanvas(600, 600);
  noStroke();
  frameRate(25);
}
function draw() {
  background(20, 20); 
  function drawEllipse(x, y) {
    const xAngle = map(x, 0, width, -2 * PI, 10 * PI, true);
    const yAngle = map(y, 0, height, -2 * PI, 4 * PI, true);
    const angle = xAngle * (x / width) + yAngle * (y / height);
    const myX = x + 20 * sin(4 * PI * t + angle);
    const myY = y + 20 * cos(2 * PI * t + angle);
    ellipse(myX, myY, 10);
  }
  for (let x = 0; x <= width; x = x + 30) {
    for (let y = 0; y <= height; y = y + 20) {
      fill('#00DFA2')
      drawEllipse(x, y);
      fill('#F6FA70')
      drawEllipse(x, y+30);

      fill('#FF0060')
      drawEllipse(x, y-300);
    }
  }

  t += 0.02; 
}
function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 4, { delay: 1 });
  }
}