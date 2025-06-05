y=-200;
var acceleration = 2;
var nDrops = 700;
var rain = [];
var speed = 5;

function setup() {
  createCanvas(400, 400);
  frameRate(20)

  for (i = 0; i < nDrops; i++) {
    rain.push(new Drop());
  }
}

function draw(){
background(224,33,138)

x = 200
   y +=20

   if (y>700){
   y=-100
   }
  bear(x,y)

  rain.forEach(function(d) {
    d.drawAndDrop();
  });  
}

function bear(X,Y){
  fill(206, 156, 90);
  stroke(2);
  ellipse(X - 31, Y - 142, 40);
  fill(206, 156, 90);
  stroke(2);
  ellipse(X + 29, Y - 142, 40);
  fill(155, 100, 41);
  stroke(0);
  rect(X - 130, Y - 67, 100, 40, 50);
  fill(155, 100, 41);
  stroke(0);
  rect(X + 30, Y - 67, 100, 40, 50);
  fill(206, 156, 90);
  noStroke();
  ellipse(X - 110, Y - 47, 30);
  stroke(0);
  line(X - 135, Y - 54, X - 115, Y - 54);
  line(X - 140, Y - 47, X - 115, Y - 47);
  line(X - 135, Y - 40, X - 115, Y - 40);
  fill(206, 156, 90);
  noStroke();
  ellipse(X + 110, Y - 47, 30);
  stroke(0);
  line(X + 135, Y - 54, X + 115, Y - 54);
  line(X + 140, Y - 47, X + 115, Y - 47);
  line(X + 135, Y - 40, X + 115, Y - 40);
  fill(155, 100, 41);
  stroke(0);
  rect(X - 60, Y + 31, 40, 90, 50);
  fill(155, 100, 41);
  stroke(0);
  rect(X + 20, Y + 31, 40, 90, 50);
  stroke(0);
  line(X - 52, Y + 103, X - 52, Y + 123);
  line(X - 42, Y + 103, X - 42, Y + 128);
  line(X - 32, Y + 103, X - 32, Y + 123);
  line(X + 32, Y + 103, X + 32, Y + 123);
  line(X + 42, Y + 103, X + 42, Y + 128);
  line(X + 52, Y + 103, X + 52, Y + 123);
  fill(155, 100, 41);
  stroke(0);
  ellipse(X, Y - 17, 150, 180);
  fill(155, 100, 41);
  stroke(0);
  ellipse(X, Y - 117, 85);
  fill(0);
  stroke(0);
  ellipse(X - 20, Y - 127, 7);
  fill(0);
  stroke(0);
  ellipse(X + 20, Y - 127, 7);
  fill(255);
  ellipse(X - 19, Y - 127, 4);
  fill(255);
  ellipse(X + 21, Y - 127, 4);
  fill(206, 156, 90);
  stroke(0);
  ellipse(X, Y - 103, 40, 30);
  fill(0);
  ellipse(X, Y - 109, 16, 12);
  line(X - 17, Y - 96, X, Y - 109);
  line(X + 17, Y - 96, X, Y - 109);
  fill(206, 156, 90);
  noStroke();
  ellipse(X, Y, 90);
}

function keyPressed() {
  if (key === 's') {
    saveGif('Elements',2);
  }
}

function Drop() {
  this.initX = function() {
    this.x = random() * width;
  };

  this.initY = function() {
    this.y = -random() * height+height/2; 
  };

  this.initX();
  this.y = random() * height+height/2;

  this.length = random() * 10;
  this.speed = random();

  this.drawAndDrop = function() {
    this.draw();
    this.drop();
  };

  this.draw = function() {
A=[[5,8,84],
   [29,31,102],
   [18,22,127],
   [25,41,144],
   [23,51,168]]


    stroke(A[Math.floor(random(5))]);
    strokeWeight(4);
    line(this.x, this.y, this.x, this.y + this.length);
  };

  this.drop = function() {
    if (this.y < height) {
      this.y += this.speed;
      this.speed += acceleration;
    } else {
      this.speed = random();
      this.initY();
      this.initX();
    }
    
  }
    
}