let x;
let y;
let speedX;
let speedY;
function setup() {
  createCanvas(400, 400);

  x = 0;
  y = 200;
  speedX = random(5, 10);
  speedY = random(5, 10);
  directionX = 1
  directionY = 1
}

function draw() {
  background("white");

  drawTriangle(x, y, 2);
  x = x + speedX;
  y = y + speedY;

  if (x >= 330 || x < -10) {
    speedX = speedX * -1;
  }

  if (y >= 330 || y <= -10) {
    speedY = speedY * -1;
  }
}

function drawTriangle(triangleX, triangleY, size) {
  push();
  fill("black")
  translate(triangleX, triangleY);
  scale(size);
  triangle(20, 5, 5, 35, 35, 35);
  pop();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    speedY = random(-5, -10);
  }else if (keyCode === DOWN_ARROW){
  speedY = random(5, 10);
  }else if (keyCode === LEFT_ARROW){
    speedX = random(-5, -10);
  }else if (keyCode === RIGHT_ARROW){
    speedX = random(5, 10);
  }
}
