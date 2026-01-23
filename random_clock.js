/*
 * Random Clock, written in Processing
 *
 * Rose Midford 2024-07-17
 * Ported to p5.js in 2026-01-57
 *
 * Dunno, got depressed and starter writing a clock.
 * Why did I do this? I've never made one I guess.
 *
 * SPDX-License-Identifier: MIT
 * Repository: https://github.com/umbraroze/random_clock
 */

function setup() {
  createCanvas(500,500);
  frameRate(50);
}

function drawClockFace() {
  var i;
  for(i=0; i < 60; i++) {
    push();
    translate(width/2,height/2);
    rotate((TWO_PI/60.0)*i); // cast i to float
    rect(-1,-230,2,20);
    pop();
  }
  for(i=0; i < 12; i++) {
    push();
    translate(width/2,height/2);
    rotate((TWO_PI/12.0)*i); // cast i to float
    if(i%3==0) {
      rect(-3,-230,6,35);
    } else {
      rect(-2,-230,4,25);
    }
    pop();
  }
}
function drawHands() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();

  // Hour hand
  push();
  translate(width/2,height/2);
  rotate((TWO_PI/12.0)*h);
  rect(-5,-150,10,150);
  pop();
  // Minute hand
  push();
  translate(width/2,height/2);
  rotate((TWO_PI/60.0)*m);
  rect(-5,-200,10,200);
  pop();
  // Second hand
  push();
  translate(width/2,height/2);
  rotate((TWO_PI/60.0)*s);
  rect(-2,-180,4,180);
  pop();
  // Centre dot
  push();
  translate(width/2,height/2);
  circle(0,0,10);
  pop();
}

function draw() {
  background(255);
  stroke(0);
  fill(0);
      
  drawClockFace();
  drawHands();
}
