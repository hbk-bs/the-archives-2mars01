let x1 = 0;
let y1=  0;
let radius= 20;
let xSpeed= 20;
let ySpeed= 1;


function setup(){
  const canvas= createCanvas(500,500);
  canvas.parent ("sketch");
 // xSpeed= random (-5, 5);
 //ySpeed= random(-5,5);

  y=height/2;
  x= width/2;

}
function draw(){
background (0,20); 
fill ("white");
stroke (x+50, y+50);
circle(x,y, radius);
x+= xSpeed;
y+= ySpeed;

if ( x>= width || x<0){
  xSpeed*= -1;

}
if (y> height|| y<0){
  ySpeed *= -1;
}
}