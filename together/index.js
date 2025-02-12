let x= 0;
let y= 0;
let radius = 20;
let xSpeed= 3;
let ySpeed= 1;

let followerX1= 0;
let followerY1= 0;

let followerX2= 0;
let followerY2= 0;


function setup(){
  const canvas = createCanvas(500,500);
  canvas.parent("sketch");
  x= width / 2;
  y= height/ 2; 
  followerX1 = x;
  followerY1= y;
  followerX2= x;
  followerY2= y;
}

function draw() {
  background(0, 20);

  fill("#ffffff");
  noStroke();
  circle (x,y,radius *2);

  fill("#ff0000")
  circle(followerX1,followerY1, radius *2);

  fill("#1500ff");
  circle (followerX2, followerY2, radius * 2);

  x += xSpeed;
  y += ySpeed;

  followerX1 += (x-followerX1) * 0.1;
  followerY1 += (y-followerY1)* 0.1;

  followerX2 += (followerX1- followerX2)* 0.1;
  followerY2 += (followerY1- followerY2) *0.1;

  if (x>= width || x< 0){
    xSpeed *=-1;

  }
  if(y >= height || y< 0){
    ySpeed *= -1; 

  }
}
