// Rose Midford 2024-07-17
// dunno, got depressed and starter writing a clock
// why did I do this? I've never made one I guess

import java.util.Calendar;

void setup() {
  size(500,500,P2D);
  frameRate(50);
}

void drawClockFace() {
  for(int i=0; i < 60; i++) {
    pushMatrix();
    translate(width/2,height/2);
    rotate((TWO_PI/60.0)*(float)i);
    rect(-1,-230,2,20);
    popMatrix();
  }
  for(int i=0; i < 12; i++) {
    pushMatrix();
    translate(width/2,height/2);
    rotate((TWO_PI/12.0)*(float)i);
    if(i%3==0) {
      rect(-3,-230,6,35);
    } else {
      rect(-2,-230,4,25);
    }
    popMatrix();
  }
}
void drawHands() {
  Calendar c = Calendar.getInstance();  
  float h = (float)c.get(Calendar.HOUR);
  float m = (float)c.get(Calendar.MINUTE);
  float s = (float)c.get(Calendar.SECOND);

  // Hour hand
  pushMatrix();
  translate(width/2,height/2);
  rotate((TWO_PI/12.0)*h);
  rect(-5,-200,10,200);
  popMatrix();
  // Minute hand
  pushMatrix();
  translate(width/2,height/2);
  rotate((TWO_PI/60.0)*m);
  rect(-5,-150,10,150);
  popMatrix();
  // Second hand
  pushMatrix();
  translate(width/2,height/2);
  rotate((TWO_PI/60.0)*s);
  rect(-2,-180,4,180);
  popMatrix();
  // Centre dot
  pushMatrix();
  translate(width/2,height/2);
  circle(0,0,10);
  popMatrix();
}

void draw() {
  background(255);
  stroke(0);
  fill(0);
      
  drawClockFace();
  drawHands();
}
