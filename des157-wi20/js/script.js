var rainbow = [...Array(100).keys()];
var i = 0;
var h = 0;

function setup() {
  var myCanvas = createCanvas(800,250)
  myCanvas.parent(mySketch);
  background("#F8BABB");
  strokeWeight(7);
  colorMode(HSB, 100);
}

function draw() {
  rainbow[0] = color(h, 100, 100);

  if (mouseIsPressed == true) {
    h+=10;
    stroke(rainbow[0]);
    line(mouseX, mouseY, pmouseX, pmouseY);
  if (h>100) {
    h = 0;
  }
  }
}
