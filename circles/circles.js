function setup() {
  createCanvas(400, 400);
  background("lightgray");
}

function draw() {
  if (mouseIsPressed === true) {
    fill("black");
  } else {
    fill("white");
  }

  circle(mouseX, mouseY, 100);
}
