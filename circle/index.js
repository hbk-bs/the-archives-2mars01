const radius = 25;
let angle = 0;
function setup() {
  const canvas = createCanvas(200, 200);
  canvas.parent('sketch');
  background('#ffffff');
  angleMode(DEGREES);
}

function draw() {
  background(0, 100);
  strokeWeight(3);
  stroke(255);
  push();
  translate(width / 2, height / 2);
  rotate ( angle); 
  
  fill(255,0,0,);
  noStroke ();
  ellipse(0,0,50% height,50% width); 

  const x = radius * cos(angle);
  const y = radius * sin(angle);
  console.log({ x, y });

  stroke (255);
  strokeWeight(3);

  
  point (x,y);
  
  pop();
  angle += 2 ; 
}
