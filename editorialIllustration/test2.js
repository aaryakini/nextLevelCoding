let cw = window.innerWidth;
let ch = window.innerHeight;
let fr = 10;

let s = second();

function setup(){
  createCanvas(cw,ch);
  background('#ffffff');
  rectMode(CENTER);
  // frameRate(fr);
}

function draw(){
  rect(mouseX, mouseY, 100, 100);

  if (s >= 10){
  	ellipse(mouseX - 200, mouseY - 200, 150, 150);
  }
}